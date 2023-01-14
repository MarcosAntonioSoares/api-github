import { langColors } from '../../../../../services/config';
import { Container, Name, Description, Footer, Lang, Link } from './styles';

interface RepositoryProps {
  repository: {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
  };
}

export function Repository({ repository }: RepositoryProps) {
  return (
    <Container color={langColors[repository.language.toLowerCase()]}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={langColors[repository.language.toLowerCase()]}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}
