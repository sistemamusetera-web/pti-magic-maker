import { existsSync, mkdirSync, readdirSync, renameSync, rmSync } from "node:fs";
import { join } from "node:path";

export function prepareStaticOutput(outputDir = "dist") {
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

  return publicDir;
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  prepareStaticOutput();
  console.log("Static deployment output prepared at dist/public.");
}
