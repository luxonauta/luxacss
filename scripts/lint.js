import { execSync } from "node:child_process";

console.log("");
console.log("› eslint");
execSync("cd docs && npx eslint --fix .", { stdio: "inherit" });
console.log("");
console.log("› prettier");
execSync("prettier --write .", { stdio: "inherit" });
console.log("✔ clean");
console.log("");
