'use client';
import { cn } from '@/lib/utils';
import { ArrowUpRight, FolderOpen, GithubLogo } from '@phosphor-icons/react';
import Link from 'next/link';
import { Button } from './ui/button';

export const ProjectCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <article
      className={cn('border flex flex-col rounded-lg p-4', className)}
      {...props}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-x-2">
          <FolderOpen className="text-primary" weight="fill" />
          dummylogo
          <ArrowUpRight className="w-3 h-3" />
        </Link>
        <Button size="icon" variant="ghost" asChild>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <GithubLogo />
          </a>
        </Button>
      </div>
      <div className="text-base pt-2 pb-4">{children}</div>
      <div className="flex gap-x-2 flex-wrap">
        <span className="px-2.5 py-0.5 rounded-md text-sm border bg-muted">
          NextJS
        </span>
      </div>
    </article>
  );
};
