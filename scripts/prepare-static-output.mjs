import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

export function prepareStaticOutput({
  outputDir = "dist",
  nitroPublicDir = ".output/public",
  nitroServerDir = ".output/server",
  productionEntryPath = "server/production-entry.mjs",
} = {}) {
  const publicDir = join(outputDir, "public");
  const clientDir = join(outputDir, "client");

  if (!existsSync(nitroPublicDir)) {
    throw new Error(`Nitro public output '${nitroPublicDir}' was not generated.`);
  }
  if (!existsSync(nitroServerDir)) {
    throw new Error(`Nitro server output '${nitroServerDir}' was not generated.`);
  }
  if (!existsSync(productionEntryPath)) {
    throw new Error(`Production entry '${productionEntryPath}' was not found.`);
  }

  rmSync(outputDir, { recursive: true, force: true });
  mkdirSync(outputDir, { recursive: true });
  cpSync(nitroPublicDir, publicDir, { recursive: true });
  // Keep the Netlify publish directory compatible with the existing site setting.
  cpSync(nitroPublicDir, clientDir, { recursive: true });
  cpSync(nitroServerDir, join(outputDir, "server"), { recursive: true });
  copyFileSync(productionEntryPath, join(outputDir, "index.js"));

  return { publicDir, clientDir, entryPath: join(outputDir, "index.js") };
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  prepareStaticOutput();
  console.log("Static deployment output prepared at dist/public and dist/client.");
}
