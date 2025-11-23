import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

type DateFrontmatter = {
  createdAt?: string;
};

export type FrontmatterWithDate = Record<string, unknown> & {
  date?: DateFrontmatter;
};

interface ParsedMdxFile {
  frontmatter: FrontmatterWithDate;
  content: string;
}

type MdxDataEntry = FrontmatterWithDate & {
  slug: string;
  content: string;
};

const getMdxFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
};

const parseMdxFile = (filePath: string): ParsedMdxFile => {
  const rawContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(rawContent);
  return {
    frontmatter: data as FrontmatterWithDate,
    content
  };
};

const getMdxData = (dir: string) => {
  const mdxFiles = getMdxFiles(dir).map((file) => {
    const filePath = path.join(dir, file);
    const { frontmatter, content } = parseMdxFile(filePath);
    const slug = path.basename(file, path.extname(file));
    return {
      ...frontmatter,
      slug,
      content
    } as MdxDataEntry;
  });
  return mdxFiles.sort((a, b) =>
    (b.date?.createdAt ?? "").localeCompare(a.date?.createdAt ?? "")
  );
};

export const getMdxDataFromDirectory = (
  directoryName: string
): MdxDataEntry[] => {
  const directoryPath = path.join(process.cwd(), directoryName);
  return getMdxData(directoryPath);
};

export const getMdxFromFile = (
  directory: string,
  slug: string
): (FrontmatterWithDate & { content: string }) | null => {
  const filePath = path.join(process.cwd(), directory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const { frontmatter, content } = parseMdxFile(filePath);
  return { ...frontmatter, content };
};
