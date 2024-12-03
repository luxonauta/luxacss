export function isProd() {
  return process.env.NODE_ENV === "production";
}

export function getBasePath() {
  return isProd() ? "https://luxacss.com" : "http://localhost:3000";
}
