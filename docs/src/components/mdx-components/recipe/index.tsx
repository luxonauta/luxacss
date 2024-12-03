import "./index.scss";
import fs from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
import { Tabs } from "@/components/tabs";
import CodeBlock from "../code-block";

interface RecipeProps {
  component: ReactElement;
  dirName: string;
}

const getSourceCode = async (name: string) => {
  const baseDir = `./src/components/recipes/${name}`;
  const [tsxContent, scssContent] = await Promise.all([
    fs.readFile(path.join(baseDir, "index.tsx"), "utf-8"),
    fs.readFile(path.join(baseDir, "index.scss"), "utf-8")
  ]);

  return {
    tsx: tsxContent,
    scss: scssContent
  };
};

export const Recipe = async ({ component, dirName }: RecipeProps) => {
  const sourceCode = await getSourceCode(dirName.toLowerCase());

  if (!sourceCode) {
    console.error(`Source code not found for component: ${dirName}`);
    return <span>Something went wrong. Please try again later.</span>;
  }

  return (
    <div className="example">
      <Tabs
        tabs={[
          {
            id: "preview",
            label: "Preview",
            content: <div className="preview">{component}</div>
          },
          {
            id: "tsx",
            label: "TSX",
            content: <CodeBlock lang="tsx">{sourceCode.tsx}</CodeBlock>
          },
          {
            id: "scss",
            label: "SCSS",
            content: <CodeBlock lang="scss">{sourceCode.scss}</CodeBlock>
          }
        ]}
      />
    </div>
  );
};
