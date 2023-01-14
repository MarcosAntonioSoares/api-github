import { langColors } from './config';

type GetLangsFromProps = {
  language: string;
}[];

export function getLangsFrom(repositories: GetLangsFromProps) {
  let stats = repositories
    .map((repository) => repository.language)
    .reduce(
      (data: any, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      [],
    );

  delete stats.null;

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return stats;
}
