import fs from "node:fs";
import * as sass from "sass";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sassFilePath = join(__dirname, "sass", "luxa.scss");
const outputDir = join(__dirname, "dist");
const minifiedOutputPath = join(outputDir, "compressed", "luxa.min.css");
const expandedOutputPath = join(outputDir, "expanded", "luxa.css");

const log = async (type, message) => {
  let typeEmoji;
  let typeText;

  switch (type) {
    case "info":
      typeEmoji = "ℹ️ ";
      typeText = "Info";
      break;
    case "error":
      typeEmoji = "🚫";
      typeText = "Error";
      break;
    case "success":
      typeEmoji = "✅";
      typeText = "Success";
      break;
    case "compile":
      typeEmoji = "🔨";
      typeText = "Compile";
      break;
    case "watch":
      typeEmoji = "👀";
      typeText = "Watch";
      break;
    default:
      typeEmoji = "📝";
      typeText = "Log";
  }

  const formattedMessage = message.replace(/`([^`]+)`/g, "\x1b[36m$1\x1b[0m");
  console.log(`${typeEmoji} ${typeText}: ${formattedMessage}`);
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
      sourceMap: options.sourceMap
    });

    await ensureDirectoryExistence(outputPath);

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

    log("compile", `Sass compiled to \`${outputPath}\``);
  } catch (error) {
    log("error", `Error compiling Sass: ${error}`);
  }
};

const generateJsFiles = async () => {
  const luxaJsContent = `import './compressed/luxa.min.css';\n\nexport * from './luxa-exports.js';`;
  const luxaJsPath = join(outputDir, "luxa.js");

  const luxaExportsContent = `export const version = '2.0.1';`;
  const luxaExportsPath = join(outputDir, "luxa-exports.js");

  const indexJsContent = `export * from './dist/luxa-exports.js';`;
  const indexJsPath = join(__dirname, "index.js");

  try {
    await fs.promises.writeFile(luxaJsPath, luxaJsContent, "utf8");
    await fs.promises.writeFile(luxaExportsPath, luxaExportsContent, "utf8");
    await fs.promises.writeFile(indexJsPath, indexJsContent, "utf8");
    log("success", "Generated JS files");
  } catch (error) {
    log("error", `Error generating JS files: ${error}`);
  }
};

const run = async () => {
  try {
    await compileSass(sassFilePath, minifiedOutputPath, {
      minify: true,
      sourceMap: false
    });
    await compileSass(sassFilePath, expandedOutputPath, {
      minify: false,
      sourceMap: true
    });
    await generateJsFiles();

    log("success", "Compilation process completed successfully.");
  } catch (error) {
    log("error", `Error in compilation process: ${error}`);
  }
};

const watchFiles = () => {
  log("watch", "Watching for file changes...");

  const sassDir = join(__dirname, "sass");

  fs.watch(sassDir, { recursive: true }, (_eventType, filename) => {
    if (filename) {
      log("info", `File \`${filename}\` changed, recompiling...`);
      run();
    }
  });
};

if (process.argv.includes("--watch")) {
  run()
    .then(watchFiles)
    .catch((error) => {
      log("error", `Error in overall process: ${error}`);
    });
} else {
  run().catch((error) => {
    log("error", `Error in overall process: ${error}`);
  });
}
