'use client';
import type { IExperience } from '@/types/experience';
import { Topic } from '@/components/topic';

type ExperienceCardProps = {
  items: IExperience[];
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ items }) => {
  return (
    <ol className="border-l ml-2 relative">
      {items.map(
        ({
          id,
          duration,
          position,
          location,
          company,
          employmentType,
          projects,
        }) => (
          <li key={id} className="mb-4 ml-6 md:ml-8 border rounded-lg p-5">
            <div className="absolute h-3 w-6 md:w-8 -left-[0.4rem]">
              <span className="block w-full h-px bg-border absolute top-1/2 -z-10 left-[0.4rem]" />
              <span className="block w-3 h-3 bg-background rounded-full border" />
            </div>
            <time className="block leading-none text-muted-foreground text-sm mb-6">
              {duration.startDate} – {duration.endDate}
            </time>
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={company.logo}
                alt={company.name}
                className="w-10 h-10 object-cover"
              />
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{position}</h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={company.url}
                  >
                    <strong className="font-semibold">{company.name}</strong>
                    <span className="px-1">·</span>
                    <span>{employmentType}</span>
                  </a>
                  <p className="text-muted-foreground">{location}</p>
                </div>

                <h4 className="font-semibold mb-3">Featured Projects</h4>
                <ol className="pl-3.5 md:pl-5 list-disc space-y-6">
                  {projects.map(({ name, topics, descriptions }) => (
                    <li key={name}>
                      <h4 className="font-semibold mb-2">{name}</h4>
                      <ol className="pl-3.5 md:pl-5 list-disc mb-4 space-y-1">
                        {descriptions.map((item: string) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((item) => (
                          <Topic key={item} label={item} />
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </li>
        ),
      )}
    </ol>
  );
};
