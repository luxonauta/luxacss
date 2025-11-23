import { slugify } from "@/lib/slugify";
import type { Heading } from "@/types";

export const extractHeadings = (content: string): Heading[] => {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match: RegExpExecArray | null = headingRegex.exec(content);
  while (match) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = slugify(text, `heading-${level}`);
    headings.push({ id, text, level });
    match = headingRegex.exec(content);
  }
  return headings;
};
