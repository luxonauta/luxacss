import { execSync } from "node:child_process";

console.log("");
console.log("› Linting");
execSync("node scripts/lint.js", { stdio: "inherit" });

console.log("");
console.log("› Building framework");
execSync("node scripts/build-framework.js", { stdio: "inherit" });

console.log("");
console.log("› Building documentation");
execSync("cd docs && npm run build", { stdio: "inherit" });

console.log("");
console.log("✔ Build complete");
console.log("");
