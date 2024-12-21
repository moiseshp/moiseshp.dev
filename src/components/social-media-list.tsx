import { Button } from '@/components/ui/button';
import {
  FileText,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr';

const items = [
  {
    name: 'GitHub',
    url: 'https://github.com/moiseshp',
    icon: GithubLogo,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/moiseshp',
    icon: LinkedinLogo,
  },
  { name: 'X', url: 'https://x.com/moiseseduardohp', icon: XLogo },
  {
    name: 'CVResume',
    url: 'https://cvresume.dev/moiseshp',
    icon: FileText,
  },
];

export const SocialMediaList = () => {
  return (
    <>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Button size="icon" variant="ghost" asChild key={item.url}>
            <a
              href={item.url}
              title={`Go to ${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm [&_svg]:size-6 text-inherit"
            >
              <Icon />
            </a>
          </Button>
        );
      })}
    </>
  );
};
