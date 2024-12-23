import { formatFriendlyDate } from '@/lib/format-friendly-date';
import type { IProject } from '@/types/project';

const hiddenProjects = ['moiseshp', 'blanquiazul'];

const Project = {
  index: async (): Promise<IProject[]> => {
    try {
      const endpoint =
        'https://api.github.com/users/moiseshp/repos?sort=pushed';
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error('Failed to fetch repos');
      }

      const items = await response.json();
      return items
        .filter((item: any) => !hiddenProjects.includes(item.name))
        .map((item: any) => ({
          ...item,
          htmlUrl: item.html_url,
          stargazersCount: item.stargazers_count,
          forksCount: item.forks_count,
          updatedAtFriendly: formatFriendlyDate(item.pushed_at),
        }));
    } catch (error) {
      throw error;
    }
  },
};

export async function getProjects() {
  try {
    return {
      data: await Project.index(),
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Failed to fetch repos',
    };
  }
}
