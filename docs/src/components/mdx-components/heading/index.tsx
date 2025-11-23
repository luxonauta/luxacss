import { createElement, type FC, type HTMLAttributes } from "react";

import { slugify } from "@/lib/slugify";

const createHeading = (level: 2 | 3 | 4 | 5 | 6) => {
  const Heading: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
    const slug =
      typeof children === "string" ? slugify(children, `heading-${level}`) : "";

    return createElement(
      `h${level}`,
      { id: slug, className: "title" },
      children
    );
  };

  Heading.displayName = `Heading-${level}`;
  return Heading;
};

export default createHeading;
