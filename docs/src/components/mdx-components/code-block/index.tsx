import "./index.scss";
import type { HTMLAttributes, ReactNode } from "react";
import CopyButton from "../copy-button";

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  children?: ReactNode;
}

const CodeBlock = ({ children, ...preProps }: CodeBlockProps) => (
  <div className="code-block">
    <pre {...preProps}>{children}</pre>
    <CopyButton>{children}</CopyButton>
  </div>
);

export default CodeBlock;
