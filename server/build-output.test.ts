import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { afterEach, describe, expect, it } from "vitest";
import { prepareStaticOutput } from "../scripts/prepare-static-output.mjs";

const temporaryDirectories: string[] = [];

afterEach(() => {
  temporaryDirectories.splice(0).forEach((directory) => rmSync(directory, { recursive: true, force: true }));
});

describe("prepareStaticOutput", () => {
  it("moves generated assets into the dist/public directory expected by deployment", () => {
    const distDirectory = mkdtempSync(join(tmpdir(), "pti-build-"));
    const nitroDirectory = mkdtempSync(join(tmpdir(), "pti-nitro-"));
    const entryDirectory = mkdtempSync(join(tmpdir(), "pti-entry-"));
    temporaryDirectories.push(distDirectory);
    temporaryDirectories.push(nitroDirectory);
    temporaryDirectories.push(entryDirectory);
    mkdirSync(join(distDirectory, "assets"));
    writeFileSync(join(distDirectory, "assets", "app.js"), "export {};");
    writeFileSync(join(nitroDirectory, "main.mjs"), "export default () => new Response();");
    const sourceEntry = join(entryDirectory, "production-entry.mjs");
    writeFileSync(sourceEntry, "console.log('server');");

    const { publicDir, entryPath } = prepareStaticOutput({
      outputDir: distDirectory,
      nitroServerDir: nitroDirectory,
      productionEntryPath: sourceEntry,
    });

    expect(publicDir).toBe(join(distDirectory, "public"));
    expect(existsSync(join(publicDir, "assets", "app.js"))).toBe(true);
    expect(existsSync(join(distDirectory, "server", "main.mjs"))).toBe(true);
    expect(existsSync(entryPath)).toBe(true);
  });
});
