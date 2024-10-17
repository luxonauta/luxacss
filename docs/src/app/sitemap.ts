import fs from "node:fs/promises";
import path from "node:path";

const contentDirectory = path.join(process.cwd(), "./content");

const Sitemap = async () => {
  const files = await fs.readdir(contentDirectory);

  const docs = files.map((file) => ({
    url: `https://www.luxacss.com/docs/${file.replace(".mdx", "")}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  const routes = ["", "/docs", "/about"].map((route) => ({
    url: `https://www.luxacss.com${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  return [...routes, ...docs];
};

export default Sitemap;
