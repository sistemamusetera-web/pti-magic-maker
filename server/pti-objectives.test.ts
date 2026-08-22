import { describe, expect, it } from "vitest";
import { OBJECTIVES_TEMPLATES } from "../src/lib/pti-templates";

describe("PTI objectives templates", () => {
  it("includes occupational therapy goals for AVDs and AIVDs", () => {
    const occupationalTherapy = OBJECTIVES_TEMPLATES.find((template) => template.id === "to-avds-aivds");

    expect(occupationalTherapy).toMatchObject({
      area: "Terapia Ocupacional",
      label: "TO — AVDs e AIVDs",
    });
    expect(occupationalTherapy?.items).toHaveLength(2);
  });
});
