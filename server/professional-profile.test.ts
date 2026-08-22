import { describe, expect, it } from "vitest";
import { createEmptyPTI } from "../src/lib/pti-pdf";
import { applyRegisteredProfessional, getRegisteredProfessionalName } from "../src/lib/professional-profile";

describe("Registered professional profile", () => {
  it("uses the professional name saved during account registration", () => {
    expect(getRegisteredProfessionalName({
      email: "profissional@exemplo.com",
      user_metadata: { full_name: "Dra. Ana Souza" },
    })).toBe("Dra. Ana Souza");
  });

  it("adds the registered name only when the PTI professional field is empty", () => {
    expect(applyRegisteredProfessional(createEmptyPTI(), "Dra. Ana Souza").professional).toBe("Dra. Ana Souza");
    expect(applyRegisteredProfessional(createEmptyPTI({ professional: "Dr. Bruno Lima" }), "Dra. Ana Souza").professional).toBe("Dr. Bruno Lima");
  });

  it("fills a first PTI that has no saved evaluation or professional value", () => {
    const firstPti = createEmptyPTI({ diagnosis: "TEA (CID-10 F84)" });

    expect(applyRegisteredProfessional(firstPti, "Dra. Ana Souza")).toMatchObject({
      diagnosis: "TEA (CID-10 F84)",
      professional: "Dra. Ana Souza",
    });
  });
});
