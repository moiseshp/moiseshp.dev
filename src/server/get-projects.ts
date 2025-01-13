import type { IProject } from '@/types/project';
import customProjects from '@/server/data/custom-projects.json';

export async function getProjects(): Promise<{
  data?: IProject[];
  error?: string;
}> {
  try {
    const username = 'moiseshp';
    const url = `https://api.github.com/users/${username}/repos`;

    const response = await fetch(url);
    if (!response.ok) throw Error;

    const items = await response.json();
    const hiddenProjects = [
      'moiseshp',
      'blanquiazul',
      'moiseshp.dev',
      'dummy-logo-maker',
    ];
    const projects = items
      .filter((item: any) => !hiddenProjects.includes(item.name))
      .map((item: any) => ({
        ...item,
        webUrl: item.homepage,
        projectUrl: item.html_url,
        stargazersCount: item.stargazers_count,
        forksCount: item.forks_count,
        updatedAt: item.pushed_at,
      }));

    return {
      data: [...customProjects, ...projects],
    };
  } catch (error) {
    console.error(`GET_PROJECTS: ${JSON.stringify(error)}`);
    return {
      error: 'Oops! Failed to fetch projects from GitHub',
    };
  }
}
