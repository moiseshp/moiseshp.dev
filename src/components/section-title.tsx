import { cn } from '@/lib/utils';

export const SectionTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2 className={cn('text-xl font-semibold mb-5', className)} {...props}>
      {children}
    </h2>
  );
};
