import "./index.css";

import type { BlockquoteHTMLAttributes, DetailedHTMLProps } from "react";

import { SeedlingIcon } from "@/components/icons";

type BlockquoteProps = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

const Blockquote = ({ children, ...props }: BlockquoteProps) => (
  <div className="blockquote">
    <div className="icon" aria-hidden={true}>
      <SeedlingIcon />
    </div>
    <blockquote {...props}>{children}</blockquote>
  </div>
);

export default Blockquote;
