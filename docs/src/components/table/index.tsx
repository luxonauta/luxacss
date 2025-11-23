import "./index.css";

import type { FC, ReactNode, TableHTMLAttributes } from "react";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
}

const Table: FC<TableProps> = ({ children, ...props }) => (
  <div className="table">
    <table {...props}>{children}</table>
  </div>
);

export default Table;
