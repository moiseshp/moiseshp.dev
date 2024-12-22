import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/section-title';
import { ExperienceCard } from '@/components/experience-card';
import { getExperiences } from '@/server/actions/get-experiences';
import { getProjects } from '@/server/actions/get-projects';

export default async function Page() {
  const { data: projects } = await getProjects();
  const { data: experiences } = getExperiences();

  return (
    <div className="flex flex-col gap-y-12 py-6">
      <section className="text-xl leading-8">
        I am Moisés, lorem ipsum dolor sit amet, consectetur adipiscing elit. I
        am a Frontend Developer specializing in React with over 5 years of
        experience, focused on creating intuitive and engaging UI/UX designs.
      </section>

      <section>
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          {projects?.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceCard items={experiences} />
      </section>
    </div>
  );
}
