import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Netlify configuration", () => {
  it("uses the pnpm production build and Nitro's dist output", () => {
    const configuration = readFileSync(new URL("../netlify.toml", import.meta.url), "utf8");

    expect(configuration).toContain('command = "pnpm run build"');
    expect(configuration).toContain('publish = "dist"');
    expect(configuration).toContain('NODE_VERSION = "22"');
  });
});
