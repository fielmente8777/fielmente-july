import { JSX } from "react";
interface HeadingsProps {
  level: number;
  heading: string;
  className?: string;
  /** Render as another tag (e.g. "p" for a section label) while keeping the same styling. */
  as?: keyof JSX.IntrinsicElements;
}

const Headings: React.FC<HeadingsProps> = ({ heading, level, className, as }) => {
  const Tag = as ?? (`h${level}` as keyof JSX.IntrinsicElements);
  return (
    <Tag
      className={`${className}`}
      dangerouslySetInnerHTML={{ __html: heading || "" }}
    />
  );
};

export default Headings;
