import "@/styles/pages/recipes.css";

import PageTransition from "@/components/page-transition";
import { RecipeItem } from "@/components/recipe-card";
import type { Recipe } from "@/types";
import { getMdxDataFromDirectory } from "@/utils/mdx";

export const metadata = {
  title: "Recipes",
  description:
    "Component recipes for you to modify, copy and paste into your projects!",
  alternates: {
    canonical: "/recipes"
  },
  openGraph: {
    url: "https://www.luxacss.com/recipes"
  }
};

const Recipes = async () => {
  const mdxFiles = getMdxDataFromDirectory("./recipes");

  const recipes: Recipe[] = mdxFiles.map((file) => {
    const date = file.date?.createdAt
      ? new Date(file.date.createdAt)
      : new Date();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);

    return {
      link: `/recipes/${file.slug}`,
      title: String(file.title ?? ""),
      description: String(file.description ?? ""),
      lastModified: {
        display: `${month}, ${year}`,
        iso: date.toISOString()
      }
    };
  });

  return (
    <PageTransition className="row flow-column-wrap align-start">
      <h1 className="title primary">Recipes</h1>
      <div className="text">
        <p>
          Component and elements recipes to modify, copy and paste into your
          projects!
        </p>
        <p>
          These recipes are pre-built components using Luxa CSS that you can use
          as starting points for your own designs. Each recipe includes complete
          source code with TSX and CSS, so you can see exactly how it works and
          customize it to fit your needs.
        </p>
        <p>
          All recipes are built with standard CSS and follow Luxa&apos;s
          minimalist principles—no complex dependencies, just clean,
          maintainable code that you can understand and modify easily.
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
