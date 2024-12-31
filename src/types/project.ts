export interface IProject {
  id?: number;
  name: string;
  webUrl?: string;
  projectUrl?: string;
  description?: string;
  topics: string[];
  forks?: number;
  stargazersCount?: number;
  forksCount?: number;
  updatedAt?: string;
}
