import "./index.scss";
import { FC, ReactNode, TableHTMLAttributes } from "react";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
}

const Table: FC<TableProps> = ({ children, ...props }) => (
  <div className="table" tabIndex={0}>
    <table {...props}>{children}</table>
  </div>
);

export default Table;
