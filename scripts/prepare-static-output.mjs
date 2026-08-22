import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, renameSync, rmSync } from "node:fs";
import { join } from "node:path";

export function prepareStaticOutput({
  outputDir = "dist",
  nitroServerDir = ".netlify/functions-internal/server",
  productionEntryPath = "server/production-entry.mjs",
} = {}) {
  const publicDir = join(outputDir, "public");

  if (!existsSync(outputDir)) {
    throw new Error(`Build output directory '${outputDir}' was not generated.`);
  }

  rmSync(publicDir, { recursive: true, force: true });
  mkdirSync(publicDir, { recursive: true });

  for (const entry of readdirSync(outputDir)) {
    if (entry !== "public") {
      renameSync(join(outputDir, entry), join(publicDir, entry));
    }
  }

  if (readdirSync(publicDir).length === 0) {
    throw new Error("No static files were generated in 'dist/public'.");
  }

  if (!existsSync(nitroServerDir)) {
    throw new Error(`Nitro server directory '${nitroServerDir}' was not generated.`);
  }

  if (!existsSync(productionEntryPath)) {
    throw new Error(`Production entry '${productionEntryPath}' was not found.`);
  }

  cpSync(nitroServerDir, join(outputDir, "server"), { recursive: true });
  copyFileSync(productionEntryPath, join(outputDir, "index.js"));

  return { publicDir, entryPath: join(outputDir, "index.js") };
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  if (process.env.NETLIFY === "true" || process.env.NETLIFY === "1") {
    console.log("Netlify build detected: keeping Nitro's native Netlify output.");
  } else {
    prepareStaticOutput();
    console.log("Static deployment output prepared at dist/public.");
  }
}
