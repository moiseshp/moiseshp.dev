import { IProject } from '@/types/project';

const Repo = {
  index: async (): Promise<IProject[]> => {
    try {
      const response = await fetch(
        `https://api.github.com/users/moiseshp/repos?sort=pushed`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch repos');
      }

      const items = await response.json();
      return items.map((item: any) => ({
        ...item,
        htmlUrl: item.html_url,
        stargazersCount: item.stargazers_count,
        forksCount: item.forks_count,
      }));
    } catch (error) {
      throw error;
    }
  },
};

export async function getRepos() {
  try {
    return {
      data: await Repo.index(),
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Failed to fetch repos',
    };
  }
}
