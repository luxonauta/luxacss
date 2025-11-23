import { execSync } from "node:child_process";

console.log("");
console.log("› Linting");
execSync("tsx scripts/lint.ts", { stdio: "inherit" });

console.log("");
console.log("› Building framework");
execSync("tsx scripts/build-framework.ts", { stdio: "inherit" });

console.log("");
console.log("› Building documentation");
execSync("npm run build --workspace=docs", { stdio: "inherit" });

console.log("");
console.log("✔ Build complete");
console.log("");
