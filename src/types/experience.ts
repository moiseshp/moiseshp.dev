import type { IProject } from '@/types/project';

export interface IExperience {
  position: string;
  company: {
    name: string;
    logo: string;
    url: string;
  };
  employmentType: string;
  location: string;
  duration: {
    startDate: string;
    endDate: string;
    totalTime: string;
  };
  projects: IProject[];
}
