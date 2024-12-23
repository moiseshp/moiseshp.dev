type TopicProps = {
  label: string;
};

export const Topic: React.FC<TopicProps> = ({ label }) => {
  if (!label) return;
  return (
    <span className="px-2 py-0.5 rounded-sm text-sm bg-muted capitalize">
      {label.replaceAll('-', ' ')}
    </span>
  );
};
