'use client';
import {
  ArrowUpRight,
  FolderOpen,
  GithubLogo,
  Star,
} from '@phosphor-icons/react';
import { Button } from './ui/button';
import { IProject } from '@/types/project';

export const ProjectCard: React.FC<IProject> = ({
  homepage,
  name,
  htmlUrl,
  description,
  topics,
  stargazersCount,
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
          <div className="flex items-center gap-x-2">
            <Star />
            <span className="text-sm"> {stargazersCount}</span>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
              <GithubLogo />
            </a>
          </Button>
        </div>
      </div>
      <div className="text-base pt-2 pb-5 overflow-hidden truncate">
        {description}
      </div>
      <div className="flex gap-2 flex-wrap">
        {topics.map((item) => (
          <span
            key={item}
            className="px-2.5 py-0.5 rounded-md text-sm border bg-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
};
