import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/section-title';
import { TimelineCard } from '@/components/timeline-card';
import { getRepos } from '@/server/actions/get-repos';

const events = [
  {
    date: 'March 2023',
    title: 'Application UI code in Tailwind CSS',
    description:
      'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
  {
    date: 'April 2023',
    title: 'Marketing UI design in Figma',
    description:
      'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
  },
  {
    date: 'June 2023',
    title: 'E-Commerce UI code in Tailwind CSS',
    description:
      'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
  },
];

export default async function Page() {
  const { data } = await getRepos();

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
          {data?.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Experience</SectionTitle>
        <TimelineCard events={events} />
      </section>
    </div>
  );
}
