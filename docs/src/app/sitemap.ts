import fs from "node:fs/promises";
import path from "node:path";

const contentDirectory = path.join(process.cwd(), "./content");
const recipesDirectory = path.join(process.cwd(), "./recipes");

const Sitemap = async () => {
  const contentFiles = await fs.readdir(contentDirectory);
  const recipeFiles = await fs.readdir(recipesDirectory);

  const docs = contentFiles.map((file) => ({
    url: `https://www.luxacss.com/docs/${file.replace(".mdx", "")}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  const recipes = recipeFiles.map((file) => ({
    url: `https://www.luxacss.com/recipes/${file.replace(".mdx", "")}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  const routes = ["", "/about", "/recipes"].map((route) => ({
    url: `https://www.luxacss.com${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  return [...routes, ...docs, ...recipes];
};

export default Sitemap;
