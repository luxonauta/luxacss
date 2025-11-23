import { execSync } from "node:child_process";
import { platform } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const nodeBinDir = join(rootDir, "node_modules", ".bin");

const getBinPath = (binName: string): string => {
  const isWindows = platform() === "win32";
  return join(nodeBinDir, isWindows ? `${binName}.cmd` : binName);
};

const colors = {
  reset: "\x1b[0m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m"
};

const log = {
  info: (message: string) =>
    console.log(`${colors.cyan}›${colors.reset} ${message}`),
  success: (message: string) =>
    console.log(`${colors.green}✔${colors.reset} ${message}`),
  error: (message: string) =>
    console.log(`${colors.red}✗${colors.reset} ${message}`),
  warning: (message: string) =>
    console.log(`${colors.yellow}⚠${colors.reset} ${message}`)
};

const formatTime = (ms: number): string => {
  if (ms < 1000) {
    return `${ms}ms`;
  }
  return `${(ms / 1000).toFixed(2)}s`;
};

console.log("");
log.info("Running linters...");
console.log("");

const startTime = Date.now();

try {
  log.info("ESLint");
  const eslintStart = Date.now();
  execSync(`"${getBinPath("eslint")}" --fix .`, {
    cwd: rootDir,
    stdio: "inherit"
  });
  const eslintTime = Date.now() - eslintStart;
  log.success(
    `ESLint passed ${colors.dim}(${formatTime(eslintTime)})${colors.reset}`
  );
} catch {
  log.error("ESLint found issues");
  process.exit(1);
}

console.log("");

try {
  log.info("Prettier");
  const prettierStart = Date.now();
  execSync(`"${getBinPath("prettier")}" --write --log-level warn .`, {
    cwd: rootDir,
    stdio: "inherit"
  });
  const prettierTime = Date.now() - prettierStart;
  log.success(
    `Prettier formatted files ${colors.dim}(${formatTime(prettierTime)})${colors.reset}`
  );
} catch {
  log.error("Prettier failed");
  process.exit(1);
}

const totalTime = Date.now() - startTime;

console.log("");
log.success(
  `All checks passed ${colors.dim}(${formatTime(totalTime)})${colors.reset}`
);
console.log("");
