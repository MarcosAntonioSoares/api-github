import { Cleaner, Container, Selector } from './styles';

interface Languages {
  name: string;
  count: number;
  color: string;
}

type FilterProps = {
  languages: Languages[];
  currentLanguage: string | undefined;
  handleClick: (name: string) => void;
};

export function Filter({ languages, currentLanguage, handleClick }: FilterProps) {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => handleClick && handleClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => handleClick && handleClick('')}>Limpar</Cleaner>
    </Container>
  );
}
