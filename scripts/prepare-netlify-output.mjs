import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const clientDir = join(distDir, "client");

if (!existsSync(distDir)) {
  throw new Error("Netlify output directory 'dist' was not generated.");
}

rmSync(clientDir, { recursive: true, force: true });
mkdirSync(clientDir, { recursive: true });

for (const entry of readdirSync(distDir)) {
  if (entry === "client") continue;
  cpSync(join(distDir, entry), join(clientDir, entry), { recursive: true });
}

console.log("Netlify publish directory prepared at dist/client.");
