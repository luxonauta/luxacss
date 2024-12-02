import "./index.scss";
import fs from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
import { Tabs } from "@/components/tabs";
import CodeBlock from "../code-block";

interface SourceCode {
  tsx: string;
  scss: string;
}

interface RecipeProps {
  component: ReactElement;
}

async function getSourceCode(name: string): Promise<SourceCode | null> {
  const baseDir = `./src/components/recipes/${name}`;

  try {
    const [tsxContent, scssContent] = await Promise.all([
      fs.readFile(path.join(baseDir, "index.tsx"), "utf-8"),
      fs.readFile(path.join(baseDir, "index.scss"), "utf-8")
    ]);

    return {
      tsx: tsxContent,
      scss: scssContent
    };
  } catch (error) {
    console.error(`Error loading source code for component ${name}:`, error);
    return null;
  }
}

export async function Recipe({ component }: RecipeProps) {
  const componentName =
    typeof component.type === "string" ? component.type : component.type.name;

  if (!componentName) {
    console.error("Component name could not be determined.");
    return null;
  }

  const sourceCode = await getSourceCode(componentName.toLowerCase());

  if (!sourceCode) {
    console.error(`Source code not found for component: ${componentName}`);
    return null;
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
}
