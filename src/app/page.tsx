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
      <section className="text-lg md:text-xl md:leading-8">
        I am a Software Developer with a strong focus on creating intuitive
        interfaces and user-centered experiences that deliver seamless,
        accessible, and scalable digital solutions. I specialize in implementing
        best development practices, ensuring agile deliveries that drive
        business growth and meet organizational goals.
      </section>

      <section>
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
