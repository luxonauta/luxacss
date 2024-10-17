import "./index.scss";
import { faSeedling } from "@awesome.me/kit-6533c71a8a/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { BlockquoteHTMLAttributes, DetailedHTMLProps } from "react";

interface BlockquoteProps
  extends DetailedHTMLProps<
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  > {}

const Blockquote = ({ children, ...props }: BlockquoteProps) => (
  <div className="blockquote">
    <div className="icon" aria-hidden={true}>
      <FontAwesomeIcon icon={faSeedling} />
    </div>
    <blockquote {...props}>{children}</blockquote>
  </div>
);

export default Blockquote;
