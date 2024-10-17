import "./index.scss";
import { slugify } from "@/lib/slugify";

interface Heading {
  title: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  if (headings.length <= 1) return <hr />;

  return (
    <div className="card col table-of-contents">
      <h2 className="title">On this page</h2>
      <ul>
        {headings.map((item) => (
          <li key={slugify(item.title)}>
            <a href={`#${slugify(item.title)}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
