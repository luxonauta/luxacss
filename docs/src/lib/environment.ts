export function isProd() {
  return process.env.NODE_ENV === "production";
}

export function getBasePath() {
  return isProd() ? "https://www.luxacss.com" : "http://localhost:3000";
}
