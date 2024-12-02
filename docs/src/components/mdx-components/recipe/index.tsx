import "./index.scss";
import fs from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
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
      <div className="view preview center col">{component}</div>
      <div className="view code center col">
        <CodeBlock lang="tsx">{sourceCode.tsx}</CodeBlock>
        <CodeBlock lang="scss">{sourceCode.scss}</CodeBlock>
      </div>
    </div>
  );
}
