import fs from "fs/promises";

const getFile = async (path: string) => {
  try {
    return await fs.readFile(path, "utf8");
  } catch (error) {
    console.error("💩 Error reading file:", error);
    return null;
  }
};

export default getFile;
