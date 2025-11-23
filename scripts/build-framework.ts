import fs from "node:fs";
import { basename, dirname, join } from "node:path";
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

interface Log {
  info: (message: string) => void;
  error: (message: string) => void;
  success: (message: string) => void;
}

const log: Log = {
  info: (message: string) => console.log(`○ ${message}`),
  error: (message: string) => console.log(`✗ ${message}`),
  success: (message: string) => console.log(`✓ ${message}`)
};

interface CompileOptions {
  minify: boolean;
  sourceMap: boolean;
}

const ensureDirectoryExistence = async (filePath: string): Promise<void> => {
  const dir = dirname(filePath);
  try {
    await fs.promises.access(dir, fs.constants.F_OK);
  } catch {
    await fs.promises.mkdir(dir, { recursive: true });
  }
};

const compileCss = async (
  filePath: string,
  outputPath: string,
  options: CompileOptions
): Promise<boolean> => {
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
    const errorMessage = error instanceof Error ? error.message : String(error);
    log.error(`Error compiling CSS: ${errorMessage}`);
    if (error instanceof Error && error.stack) {
      console.error(error.stack);
    }
    return false;
  }
};

const buildIndividualFiles = async (isWatch = false): Promise<boolean> => {
  try {
    const files = await fs.promises.readdir(cssDir);
    const cssFiles = files.filter((file) => file.endsWith(".css"));
    const compiled: string[] = [];

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
    const errorMessage = error instanceof Error ? error.message : String(error);
    log.error(`Error building individual files: ${errorMessage}`);
    return false;
  }
};

const buildFullFramework = async (isWatch = false): Promise<boolean> => {
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
    const errorMessage = error instanceof Error ? error.message : String(error);
    log.error(`Error building full framework: ${errorMessage}`);
    return false;
  }
};

const generateJsFiles = async (_isWatch = false): Promise<boolean> => {
  const luxaJsContent = `import './compressed/luxa.min.css';\n\nexport * from './luxa-exports.js';`;
  const luxaJsPath = join(outputDir, "luxa.js");

  const indexJsContent = `export * from './dist/luxa-exports.js';`;
  const indexJsPath = join(rootDir, "index.js");

  try {
    const packageJsonPath = join(rootDir, "package.json");
    const packageJsonContent = await fs.promises.readFile(
      packageJsonPath,
      "utf8"
    );
    const packageJson = JSON.parse(packageJsonContent);

    if (
      !packageJson.version ||
      typeof packageJson.version !== "string" ||
      packageJson.version.trim() === ""
    ) {
      log.error(
        "Invalid or missing version in package.json. Expected a non-empty string."
      );
      return false;
    }

    const version = packageJson.version;
    const luxaExportsContent = `export const version = '${version}';`;
    const luxaExportsPath = join(outputDir, "luxa-exports.js");

    await fs.promises.writeFile(luxaJsPath, luxaJsContent, "utf8");
    await fs.promises.writeFile(luxaExportsPath, luxaExportsContent, "utf8");
    await fs.promises.writeFile(indexJsPath, indexJsContent, "utf8");
    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    log.error(`Error generating JS files: ${errorMessage}`);
    return false;
  }
};

const run = async (isWatch = false): Promise<void> => {
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
    const errorMessage = error instanceof Error ? error.message : String(error);
    log.error(`Error in compilation process: ${errorMessage}`);
  }
};

const watchFiles = (): void => {
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
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      log.error(`Error in overall process: ${errorMessage}`);
    });
} else {
  run(false).catch((error) => {
    const errorMessage = error instanceof Error ? error.message : String(error);
    log.error(`Error in overall process: ${errorMessage}`);
  });
}
