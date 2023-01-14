import { ChangeEvent, useState } from 'react';
import { Button, Container, Form, Input, Logo, Title } from './styles';
import githubLogo from '../../assets/images/github-logo.svg';
import { MagnifyingGlass } from 'phosphor-react';

export default function Main() {
  const [login, setLogin] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input placeholder="Usuário" value={login} onChange={handleChange} />
        <Button to={`/${login}/repositories`}>
          <MagnifyingGlass size={32} color="#fff" />
        </Button>
      </Form>
    </Container>
  );
}
