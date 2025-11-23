import fs from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcss from "postcss";
import postcssImport from "postcss-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

const cssDir = join(rootDir, "css");
const outputDir = join(rootDir, "dist");
const individualOutputDir = join(outputDir, "individual");
const minifiedOutputPath = join(outputDir, "compressed", "luxa.min.css");
const expandedOutputPath = join(outputDir, "expanded", "luxa.css");
const mainCssFile = join(cssDir, "luxa.css");

const log = {
  info: (message) => console.log(`○ ${message}`),
  error: (message) => console.log(`✗ ${message}`),
  success: (message) => console.log(`✓ ${message}`)
};

const ensureDirectoryExistence = async (filePath) => {
  const dir = dirname(filePath);
  try {
    await fs.promises.access(dir, fs.constants.F_OK);
  } catch {
    await fs.promises.mkdir(dir, { recursive: true });
  }
};

const compileCss = async (filePath, outputPath, options) => {
  try {
    const cssContent = await fs.promises.readFile(filePath, "utf8");

    const plugins = [postcssImport(), autoprefixer()];

    if (options.minify) {
      plugins.push(cssnano({ preset: "default" }));
    }

    const result = await postcss(plugins).process(cssContent, {
      from: filePath,
      to: outputPath,
      map: options.sourceMap ? { inline: false } : false
    });

    await ensureDirectoryExistence(outputPath);
    await fs.promises.writeFile(outputPath, result.css, "utf8");

    if (options.sourceMap && result.map) {
      await fs.promises.writeFile(
        `${outputPath}.map`,
        result.map.toString(),
        "utf8"
      );
    }

    return true;
  } catch (error) {
    log.error(`Error compiling CSS: ${error.message}`);
    if (error.stack) {
      console.error(error.stack);
    }
    return false;
  }
};

const buildIndividualFiles = async (isWatch = false) => {
  try {
    const files = await fs.promises.readdir(cssDir);
    const cssFiles = files.filter((file) => file.endsWith(".css"));
    const compiled = [];

    for (const file of cssFiles) {
      const filePath = join(cssDir, file);
      const fileName = basename(file, ".css");
      const expandedPath = join(
        individualOutputDir,
        "expanded",
        `${fileName}.css`
      );
      const minifiedPath = join(
        individualOutputDir,
        "compressed",
        `${fileName}.min.css`
      );

      const expandedSuccess = await compileCss(filePath, expandedPath, {
        minify: false,
        sourceMap: true
      });

      const minifiedSuccess = await compileCss(filePath, minifiedPath, {
        minify: true,
        sourceMap: false
      });

      if (expandedSuccess && minifiedSuccess) {
        compiled.push(fileName);
      }
    }

    if (compiled.length > 0 && !isWatch) {
      log.success(`Compiled ${compiled.length} individual files`);
      console.log("");
    }
    return compiled.length === cssFiles.length;
  } catch (error) {
    log.error(`Error building individual files: ${error.message}`);
    return false;
  }
};

const buildFullFramework = async (isWatch = false) => {
  try {
    const minifiedSuccess = await compileCss(mainCssFile, minifiedOutputPath, {
      minify: true,
      sourceMap: false
    });

    const expandedSuccess = await compileCss(mainCssFile, expandedOutputPath, {
      minify: false,
      sourceMap: true
    });

    if (minifiedSuccess && expandedSuccess && !isWatch) {
      console.log("");
      log.success("Compiled framework bundle");
    }
    return minifiedSuccess && expandedSuccess;
  } catch (error) {
    log.error(`Error building full framework: ${error.message}`);
    return false;
  }
};

const generateJsFiles = async (isWatch = false) => {
  const luxaJsContent = `import './compressed/luxa.min.css';\n\nexport * from './luxa-exports.js';`;
  const luxaJsPath = join(outputDir, "luxa.js");

  const luxaExportsContent = `export const version = '2.0.3';`;
  const luxaExportsPath = join(outputDir, "luxa-exports.js");

  const indexJsContent = `export * from './dist/luxa-exports.js';`;
  const indexJsPath = join(__dirname, "index.js");

  try {
    await fs.promises.writeFile(luxaJsPath, luxaJsContent, "utf8");
    await fs.promises.writeFile(luxaExportsPath, luxaExportsContent, "utf8");
    await fs.promises.writeFile(indexJsPath, indexJsContent, "utf8");
    return true;
  } catch (error) {
    log.error(`Error generating JS files: ${error.message}`);
    return false;
  }
};

const run = async (isWatch = false) => {
  try {
    const individualSuccess = await buildIndividualFiles(isWatch);
    const frameworkSuccess = await buildFullFramework(isWatch);
    const jsSuccess = await generateJsFiles(isWatch);

    if (individualSuccess && frameworkSuccess && jsSuccess) {
      if (!isWatch) {
        log.success("Compilation complete");
        console.log("");
      }
    }
  } catch (error) {
    log.error(`Error in compilation process: ${error.message}`);
  }
};

const watchFiles = () => {
  console.log("");
  log.info("Watching for file changes");

  fs.watch(cssDir, { recursive: true }, (_eventType, filename) => {
    if (filename?.endsWith(".css")) {
      console.log("");
      log.info(`${filename} changed`);
      run(true);
    }
  });
};

if (process.argv.includes("--watch")) {
  run(false)
    .then(() => {
      watchFiles();
    })
    .catch((error) => {
      log.error(`Error in overall process: ${error.message}`);
    });
} else {
  run(false).catch((error) => {
    log.error(`Error in overall process: ${error.message}`);
  });
}
