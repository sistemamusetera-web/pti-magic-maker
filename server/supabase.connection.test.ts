import { describe, expect, it } from "vitest";

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

describe("Supabase configuration", () => {
  it("authenticates against the public settings endpoint", async () => {
    expect(supabaseUrl).toBeTruthy();
    expect(supabasePublishableKey).toBeTruthy();

    const response = await fetch(`${supabaseUrl}/auth/v1/settings`, {
      headers: {
        apikey: supabasePublishableKey!,
        Authorization: `Bearer ${supabasePublishableKey!}`,
      },
    });

    expect(response.status).toBe(200);
    const settings = (await response.json()) as { mailer_autoconfirm?: boolean };
    expect(settings.mailer_autoconfirm).toBe(true);
  });
});
