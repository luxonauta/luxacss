import "./index.scss";
import { type ReactElement, use } from "react";
import { Tabs } from "@/components/tabs";
import { getBasePath } from "@/lib/environment";
import CodeBlock from "../code-block";

interface RecipeProps {
  component: ReactElement;
  dirName: string;
}

const fetchSourceCode = async (dirName: string) => {
  try {
    const response = await fetch(
      `${getBasePath()}/api/source/${dirName.toLowerCase()}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching source code.\n", error);
    return null;
  }
};

export const Recipe = ({ component, dirName }: RecipeProps) => {
  const sourceCode = use(fetchSourceCode(dirName));

  if (!sourceCode)
    return <span>Something went wrong. Please try again later.</span>;

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
