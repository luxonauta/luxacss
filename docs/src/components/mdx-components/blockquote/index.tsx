import "./index.scss";
import { faSeedling } from "@awesome.me/kit-a9a956ae09/icons/duotone/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlockquoteHTMLAttributes, DetailedHTMLProps } from "react";

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
