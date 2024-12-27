import type { IExperience } from '@/types/experience';
import experiences from '@/server/data/experiences.json';

export function getExperiences() {
  return {
    data: experiences as IExperience[],
  };
}
