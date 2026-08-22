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
    temporaryDirectories.push(distDirectory);
    mkdirSync(join(distDirectory, "assets"));
    writeFileSync(join(distDirectory, "assets", "app.js"), "export {};");

    const publicDirectory = prepareStaticOutput(distDirectory);

    expect(publicDirectory).toBe(join(distDirectory, "public"));
    expect(existsSync(join(publicDirectory, "assets", "app.js"))).toBe(true);
  });
});
