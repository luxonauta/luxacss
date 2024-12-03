import "@/styles/pages/recipes.scss";
import { getCompiledServerMdx } from "@mintlify/mdx";
import fs from "node:fs/promises";
import path from "node:path";
import PageTransition from "@/components/page-transition";
import { RecipeItem } from "@/components/recipe-card";
import getFile from "@/lib/get-file";
import { getFileDate } from "@/lib/get-file-date";
import type { Recipe } from "@/types";

export const metadata = {
  title: "Recipes",
  description:
    "Component recipes for you to modify, copy and paste into your projects!",
  alternates: {
    canonical: "/recipes"
  }
};

const Recipes = async () => {
  const contentDirectory = path.join(process.cwd(), "./recipes");
  const files = await fs.readdir(contentDirectory);

  const recipes: Recipe[] = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(contentDirectory, file);
      const source = await getFile(filePath);

      if (!source) {
        throw new Error(`Failed to load file: "${filePath}".`);
      }

      const { frontmatter } = await getCompiledServerMdx({
        source: source
      });

      return {
        link: `/recipes/${file.replace(/\.mdx?$/, "")}`,
        title: frontmatter.title as string,
        description: frontmatter.description as string,
        lastModified: await getFileDate(filePath)
      };
    })
  );

  return (
    <PageTransition className="row flow-column-wrap align-start">
      <h1 className="title primary">Recipes</h1>
      <div className="text">
        <p>
          Component and elements recipes to modify, copy and paste into your
          projects!
        </p>
      </div>
      <ul className="list row flow-column-wrap">
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.link}
            link={recipe.link}
            title={recipe.title}
            description={recipe.description}
            lastModified={recipe.lastModified}
          />
        ))}
      </ul>
    </PageTransition>
  );
};

export default Recipes;
