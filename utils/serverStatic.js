import path from "node:path";

export function serveStatic() {
  const filePath = path.join(baseDir, "public", "index.html");
  console.log(filePath);
}
