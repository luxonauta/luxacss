"use client";

import "./index.css";

import { isValidElement, type ReactNode, useState } from "react";

import { CheckIcon, CloneIcon } from "@/components/icons";

interface CopyButtonProps {
  children: ReactNode;
}

const CopyButton = ({ children }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const getTextFromChildren = (children: React.ReactNode): string | null => {
    if (typeof children === "string") {
      return children;
    }
    if (Array.isArray(children)) {
      return children.map(getTextFromChildren).join("");
    }
    if (isValidElement(children) && children.props) {
      const props = children.props as { children?: React.ReactNode };
      if (props.children) {
        return getTextFromChildren(props.children);
      }
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
      } catch {}
    }
  };

  return (
    <button
      type="button"
      onClick={copyToClipboard}
      className="action copy-button"
      data-state={copied ? "copied" : "not-copied"}
      title={copied ? "Copied!" : "Copy"}
    >
      <div className="icon">
        <CloneIcon className="icon-copy" />
        <CheckIcon className="icon-check" />
      </div>
      <span className="sr-only">{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
};

export default CopyButton;
