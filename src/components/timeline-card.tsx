'use client';
import { ArrowUpRight } from '@phosphor-icons/react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineCardProps {
  events: TimelineEvent[];
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ events }) => {
  return (
    <ol className="relative border-l border-muted-foreground ml-1.5">
      {events.map((event, index) => (
        <li key={index} className="mb-10 ml-7 lg:ml-8">
          <div className="absolute w-3 h-3 bg-background rounded-full mt-2 -left-[0.4rem] border border-muted-foreground"></div>
          <time className="block pt-1.5 mb-3 text-sm leading-none text-muted-foreground">
            {event.date}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {event.title}
          </h3>
          <h4 className="mb-4">
            <a className="text-muted-foreground flex items-center gap-x-1">
              <span>Company Name</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </h4>
          <p>{event.description}</p>
        </li>
      ))}
    </ol>
  );
};
