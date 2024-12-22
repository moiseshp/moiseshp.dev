'use client';
import type { IExperience } from '@/types/experience';

type ExperienceCardProps = {
  items: IExperience[];
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ items }) => {
  return (
    <ol className="relative border-l ml-1.5">
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
          <li key={id} className="mb-10 ml-7 lg:ml-8">
            <div className="absolute w-3 h-3 bg-background rounded-full mt-[0.45rem] -left-[0.4rem] border border-muted-foreground/50" />
            <time className="block pt-1.5 leading-none text-muted-foreground text-sm mb-5">
              {duration.startDate} – {duration.endDate}
            </time>
            <div className="flex gap-4">
              <img
                src={company.logo}
                alt="sss"
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

                <h4 className="font-semibold mb-3">Proyectos Destacados</h4>
                {projects.map(({ name, topics, descriptions }) => (
                  <ol key={name} className="pl-5 list-disc">
                    <li>
                      <h4 className="font-semibold mb-2">{name}</h4>
                      <ol className="pl-5 list-disc mb-4 space-y-1">
                        {descriptions.map((item: string) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((item) => (
                          <span
                            key={item}
                            className="px-2 py-0.5 text-sm border border-dotted border-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </li>
                  </ol>
                ))}
              </div>
            </div>
          </li>
        ),
      )}
    </ol>
  );
};
