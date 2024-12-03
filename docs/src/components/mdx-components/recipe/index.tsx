"use client";

import "./index.scss";
import { type ReactElement, useEffect, useState } from "react";
import { Tabs } from "@/components/tabs";
import { getBasePath } from "@/lib/environment";
import CodeBlock from "../code-block";

interface RecipeProps {
  component: ReactElement;
  dirName: string;
}

interface SourceCode {
  tsx: string;
  scss: string;
}

export const Recipe = ({ component, dirName }: RecipeProps) => {
  const [sourceCode, setSourceCode] = useState<SourceCode | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchSourceCode = async () => {
      try {
        const response = await fetch(
          `${getBasePath()}/api/source/${dirName.toLowerCase()}`
        );
        const data = await response.json();
        setSourceCode(data);
        setError(false);
      } catch (error) {
        console.error("Error fetching source code.\n", error);
        setError(true);
        setSourceCode(null);
      }
    };

    fetchSourceCode();
  }, [dirName]);

  if (error) {
    return <span>Something went wrong. Please try again later.</span>;
  }

  if (!sourceCode) {
    return <span>Loading...</span>;
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
