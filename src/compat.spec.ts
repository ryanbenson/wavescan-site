import { describe, expect, it } from "vitest";
import { checkSetup, type Setup } from "./compat";

const good: Setup = { platform: "win11", screen: "16:9", language: "en", hdr: "off" };

describe("checkSetup", () => {
  it("passes a supported setup", () => {
    const v = checkSetup(good);
    expect(v.status).toBe("ok");
    expect(v.lines.every((l) => l.status === "ok")).toBe(true);
  });

  it.each([
    { screen: "21:9" as const },
    { screen: "unsure" as const },
    { language: "other" as const },
    { hdr: "on" as const },
    { hdr: "unsure" as const },
  ])("asks for a fix when %o", (change) => {
    expect(checkSetup({ ...good, ...change }).status).toBe("fix");
  });

  it.each(["macintel", "other"] as const)("rules out %s and skips the other checks", (platform) => {
    const v = checkSetup({ ...good, platform, hdr: "on" });
    expect(v.status).toBe("no");
    expect(v.lines).toHaveLength(1);
  });

  it("mentions the yellow border on Windows 10", () => {
    const v = checkSetup({ ...good, platform: "win10" });
    expect(v.status).toBe("ok");
    expect(v.lines[0]?.text).toContain("yellow border");
  });
});
