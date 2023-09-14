export interface IRepo {
  description: string | null;
  forks_count: number;
  id: number;
  name: string;
  stargazers_count: number;
  watchers_count: number;
}

export interface IRepoContent {
  path: string;
  type: string | "dir";
}
