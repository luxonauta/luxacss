import fs from "fs";
import * as sass from "sass";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import chokidar from "chokidar";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sassFilePath = join(__dirname, "sass", "luxa.scss");

const outputDir = join(__dirname, "dist");
const minifiedOutputPath = join(outputDir, "compressed", "luxa.min.css");
const expandedOutputPath = join(outputDir, "expanded", "luxa.css");

const log = async (type, message) => {
  const timestamp = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  let typeTag;

  switch (type) {
    case "info":
      typeTag = "ℹ️  Info";
      break;
    case "error":
      typeTag = "💩 Error";
      break;
    case "success":
      typeTag = "✅ Success";
      break;
    default:
      typeTag = "🪵 Log";
  }

  console.log(`${timestamp} ${typeTag}: ${message}`);
};

const ensureDirectoryExistence = async (filePath) => {
  const dir = dirname(filePath);
  try {
    await fs.promises.access(dir, fs.constants.F_OK);
  } catch {
    await fs.promises.mkdir(dir, { recursive: true });
  }
};

const compileSass = async (filePath, outputPath, options) => {
  try {
    const result = sass.compile(filePath, {
      style: options.minify ? "compressed" : "expanded",
      sourceMap: options.sourceMap,
    });

    ensureDirectoryExistence(outputPath);

    let cssData = result.css;
    if (typeof cssData !== "string") {
      cssData = JSON.stringify(cssData);
    }
    await fs.promises.writeFile(outputPath, cssData, "utf8");

    if (options.sourceMap && result.sourceMap) {
      let sourceMapData = result.sourceMap;
      if (
        typeof sourceMapData !== "string" &&
        !Buffer.isBuffer(sourceMapData)
      ) {
        sourceMapData = JSON.stringify(sourceMapData);
      }
      await fs.promises.writeFile(`${outputPath}.map`, sourceMapData, "utf8");
    }

    log("success", `Sass compiled to ${outputPath}`);
  } catch (error) {
    log("error", `Error compiling Sass: ${error}`);
  }
};

const run = async () => {
  try {
    await compileSass(sassFilePath, minifiedOutputPath, {
      minify: true,
      sourceMap: false,
    });
    await compileSass(sassFilePath, expandedOutputPath, {
      minify: false,
      sourceMap: true,
    });

    log("success", "Compilation process completed successfully.");
  } catch (error) {
    log("error", `Error in the compilation process: ${error}`);
  }
};

const watchFiles = () => {
  log("info", "Observing changes in files...");

  const watcher = chokidar.watch(join(__dirname, "sass"), {
    ignored: /^\./,
    persistent: true,
  });

  watcher.on("change", (path) => {
    log("info", `File ${path} was changed, recompiling...`);
    run();
  });
};

run()
  .then(watchFiles)
  .catch((error) => {
    log("error", `Error in the overall process: ${error}`);
  });
