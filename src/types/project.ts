export interface IProject {
  id: number;
  name: string;
  homepage: string;
  htmlUrl: string;
  description: string;
  descriptions: string[];
  topics: string[];
  forks: number;
  stargazersCount: number;
  forksCount: number;
  updatedAtFriendly: string;
}
