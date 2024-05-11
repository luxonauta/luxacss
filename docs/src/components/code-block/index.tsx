"use client";

import "./index.scss";
import { HTMLAttributes, isValidElement, ReactNode, useState } from "react";

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  children?: ReactNode;
}

const CodeBlock = ({ children, ...preProps }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const getTextFromChildren = (children: React.ReactNode): string | null => {
    if (typeof children === "string") {
      return children;
    } else if (Array.isArray(children)) {
      return children.map(getTextFromChildren).join("");
    } else if (isValidElement(children) && children.props) {
      return getTextFromChildren(children.props.children);
    }

    return null;
  };

  const copyToClipboard = async () => {
    const text = getTextFromChildren(children);

    if (text !== null) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy!", error);
      }
    }
  };

  return (
    <div className="code-block">
      <pre {...preProps} tabIndex={0}>
        {children}
      </pre>
      <button onClick={copyToClipboard} className="action copy-button">
        <span>{copied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
};

export default CodeBlock;
