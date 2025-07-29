import { JSX } from "react";
interface HeadingsProps {
  level: number;
  heading: string;
  className?: string;
}

const Headings: React.FC<HeadingsProps> = ({ heading, level, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`${className} capitalize`}
      dangerouslySetInnerHTML={{ __html: heading }}
    />
  );
};

export default Headings;
