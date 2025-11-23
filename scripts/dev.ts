import { type ChildProcess, spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

console.log("");
console.log("Starting development mode");
console.log("");

const frameworkWatch: ChildProcess = spawn(
  "tsx",
  ["scripts/build-framework.ts", "--watch"],
  {
    cwd: rootDir,
    stdio: "inherit"
  }
);

const docsDev: ChildProcess = spawn("npm", ["run", "dev", "--workspace=docs"], {
  cwd: rootDir,
  stdio: "inherit"
});

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
