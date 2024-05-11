interface Heading {
  level: number;
  title: string;
}

export const extractHeadings = (content: string): Heading[] => {
  const headings: Heading[] = [];

  const headingLines = content
    .split("\n")
    .filter((line: string) => line.match(/^#+\s/));

  for (const line of headingLines) {
    const level = line.split(" ")[0].length;
    const title = line.replace(/^#+\s/, "");

    headings.push({ level, title });
  }

  return headings;
};
