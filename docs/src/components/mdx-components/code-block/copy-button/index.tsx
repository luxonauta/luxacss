"use client";

import "./index.scss";
import {
  faCheck,
  faClone
} from "@awesome.me/kit-a9a956ae09/icons/duotone/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isValidElement, ReactNode, useState } from "react";

interface CopyButtonProps {
  children: ReactNode;
}

const CopyButton = ({ children }: CopyButtonProps) => {
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
      } catch (error) {}
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="action copy-button"
      data-state={copied ? "copied" : "not-copied"}
      title={copied ? "Copied!" : "Copy"}
    >
      <div className="icon">
        <FontAwesomeIcon icon={faClone} className="icon-copy" />
        <FontAwesomeIcon icon={faCheck} className="icon-check" />
      </div>
      <span className="sr-only">{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
};

export default CopyButton;
