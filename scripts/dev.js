import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

console.log("");
console.log("Starting development mode");
console.log("");

// Start framework watch mode
const frameworkWatch = spawn(
  "node",
  ["scripts/build-framework.js", "--watch"],
  {
    cwd: rootDir,
    stdio: "inherit"
  }
);

// Start docs dev server
const docsDev = spawn("npm", ["run", "dev"], {
  cwd: join(rootDir, "docs"),
  stdio: "inherit"
});

// Handle process termination
process.on("SIGINT", () => {
  frameworkWatch.kill();
  docsDev.kill();
  process.exit();
});

process.on("SIGTERM", () => {
  frameworkWatch.kill();
  docsDev.kill();
  process.exit();
});
