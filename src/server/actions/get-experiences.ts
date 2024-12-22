import type { IExperience } from '@/types/experience';
import experiences from '@/server/experiences.json';

export function getExperiences() {
  return {
    data: experiences as IExperience[],
  };
}
