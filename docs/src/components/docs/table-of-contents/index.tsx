import "./index.css";

import type { Heading } from "@/types";

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  if (headings.length <= 1) {
    return <hr />;
  }

  return (
    <div className="card col table-of-contents">
      <h2 className="title">On this page</h2>
      <ul>
        {headings.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
