'use client';
import {
  ArrowUpRight,
  FolderOpen,
  GitFork,
  GithubLogo,
  Star,
} from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import type { IProject } from '@/types/project';
import { CalendarCheck } from '@phosphor-icons/react/dist/ssr';
import { Topic } from '@/components/topic';

export const ProjectCard: React.FC<IProject> = ({
  homepage,
  name,
  htmlUrl,
  description,
  topics,
  stargazersCount,
  forks,
  updatedAtFriendly,
}) => {
  return (
    <article className="border flex flex-col rounded-lg p-4">
      <div className="flex justify-between items-center">
        <a
          href={homepage}
          className="flex items-center gap-x-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FolderOpen className="text-primary" weight="fill" />
          {name}
          <ArrowUpRight className="w-3 h-3" />
        </a>
        <div className="flex items-center gap-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
              <GithubLogo />
            </a>
          </Button>
        </div>
      </div>
      <div className="text-base mt-2 mb-5 truncate">{description}</div>
      <div className="flex gap-1.5 flex-wrap mb-5">
        {topics.map((item) => (
          <Topic key={item} label={item} />
        ))}
      </div>
      <div className="flex gap-x-4">
        <div className="flex items-center gap-x-2">
          <Star />
          <span className="text-xs">{stargazersCount}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <GitFork />
          <span className="text-xs">{forks}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <CalendarCheck />
          <span className="text-xs">Updated {updatedAtFriendly}</span>
        </div>
      </div>
    </article>
  );
};
