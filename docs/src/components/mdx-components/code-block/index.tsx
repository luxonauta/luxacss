import "./index.scss";
import { HTMLAttributes, ReactNode } from "react";
import CopyButton from "./copy-button";

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  children?: ReactNode;
}

const CodeBlock = ({ children, ...preProps }: CodeBlockProps) => (
  <div className="code-block">
    <pre {...preProps} tabIndex={0}>
      {children}
    </pre>
    <CopyButton>{children}</CopyButton>
  </div>
);

export default CodeBlock;
