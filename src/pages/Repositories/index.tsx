import { SetStateAction, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRepositories, getUser } from '../../services/api';
import { getLangsFrom } from '../../services/getLangsFrom';
import { Filter } from './components/Filter';
import { Profile } from './components/Profile';
import { RepositoriesComponent } from './components/RepositoriesComponent';
import { Container, Main, Sidebar } from './styles';

interface userParamsProps {
  login: string;
}

export function Repositories() {
  const [user, setUser] = useState();
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [languages, setLanguages] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  const { login } = useParams<keyof userParamsProps>() as userParamsProps;

  useEffect(() => {
    async function loadData() {
      const [res, repos] = await Promise.all([getUser(login), getRepositories(login)]);
      setUser(res);
      setRepositories(repos);
      setLanguages(getLangsFrom(repos));

      setLoading(false);
    }
    loadData();
  }, []);

  function handleFilterClick(language: SetStateAction<string>) {
    setCurrentLanguage(language);
  }

  if (loading) {
    return <h1>Carregando....</h1>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} handleClick={handleFilterClick} />
      </Sidebar>
      <Main>
        <RepositoriesComponent repositories={repositories} currentLanguage={currentLanguage} />{' '}
      </Main>
    </Container>
  );
}
