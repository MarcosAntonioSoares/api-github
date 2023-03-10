import { Repository } from './Repository';
import { Container } from './styles';

interface Repositories {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
}

type RepositoriesComponentProps = {
  repositories: Repositories[];
  currentLanguage: string;
};

export function RepositoriesComponent({ repositories, currentLanguage }: RepositoriesComponentProps) {
  return (
    <Container>
      {repositories
        .filter((repository) =>
          currentLanguage === '' ? repository.language : repository.language === currentLanguage,
        )
        .map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))}
    </Container>
  );
}
