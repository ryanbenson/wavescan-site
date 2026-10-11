/**
 * The "Will it work for me?" checker. Rules come from the app README's
 * "Will it work on my PC/Mac?" section: English, 16:9 or 16:10, HDR off, Windows 10/11 or an
 * Apple Silicon Mac on macOS 13+.
 */

export type Platform = "win11" | "win10" | "mac" | "macintel" | "other";
export type ScreenShape = "16:9" | "16:10" | "21:9" | "unsure";
export type Language = "en" | "other";
export type Hdr = "off" | "on" | "unsure";

export interface Setup {
  platform: Platform;
  screen: ScreenShape;
  language: Language;
  hdr: Hdr;
}

/** ok: fine as is. fix: works after a change. no: can't work. */
export type Status = "ok" | "fix" | "no";

export interface Line {
  status: Status;
  text: string;
}

export interface Verdict {
  status: Status;
  title: string;
  lines: Line[];
}

export const platformOptions: { value: Platform; label: string }[] = [
  { value: "win11", label: "Windows 11 PC" },
  { value: "win10", label: "Windows 10 PC" },
  { value: "mac", label: "Mac with Apple chip (M1 or newer)" },
  { value: "macintel", label: "Mac with Intel chip" },
  { value: "other", label: "Phone, tablet, PlayStation or Steam Deck" },
];

export const screenOptions: { value: ScreenShape; label: string }[] = [
  { value: "16:9", label: "16:9 (1920×1080, 2560×1440, 4K)" },
  { value: "16:10", label: "16:10 (1920×1200, MacBook)" },
  { value: "21:9", label: "21:9 ultrawide (3440×1440)" },
  { value: "unsure", label: "I'm not sure" },
];

export const languageOptions: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "other", label: "Another language" },
];

export const hdrOptions: { value: Hdr; label: string }[] = [
  { value: "off", label: "Off" },
  { value: "on", label: "On" },
  { value: "unsure", label: "I'm not sure" },
];

function platformLine(platform: Platform): Line {
  switch (platform) {
    case "other":
      return { status: "no", text: "Wavescan only works on Windows PCs and Macs with an Apple chip." };
    case "macintel":
      return { status: "no", text: "Wuthering Waves doesn't run on Intel Macs, so Wavescan can't either." };
    case "win10":
      return { status: "ok", text: "Windows 10 works. You'll see a yellow border around the game while scanning. That's normal." };
    case "mac":
      return { status: "ok", text: "Apple chip Macs work with macOS 13 or newer." };
    case "win11":
      return { status: "ok", text: "Windows 11 works." };
  }
}

function screenLine(screen: ScreenShape): Line {
  switch (screen) {
    case "21:9":
      return { status: "fix", text: "Ultrawide isn't supported yet. Set the game to a 16:9 window, like 2560×1440, while you scan." };
    case "unsure":
      return { status: "fix", text: "Not sure? Run Diagnostics in the app. It tells you if the screen shape is right." };
    default:
      return { status: "ok", text: "Your screen shape is supported." };
  }
}

function languageLine(language: Language): Line {
  return language === "en"
    ? { status: "ok", text: "English is supported." }
    : { status: "fix", text: "Switch the game's text language to English while you scan." };
}

function hdrLine(hdr: Hdr): Line {
  switch (hdr) {
    case "on":
      return { status: "fix", text: "Turn HDR off while you scan. You can turn it back on after." };
    case "unsure":
      return { status: "fix", text: "HDR is in the game's graphics settings. Make sure it's off." };
    case "off":
      return { status: "ok", text: "HDR is off. Good." };
  }
}

export function checkSetup(setup: Setup): Verdict {
  const platform = platformLine(setup.platform);
  // The other settings don't matter on a device Wavescan can't run on.
  const lines = platform.status === "no" ? [platform] : [platform, screenLine(setup.screen), languageLine(setup.language), hdrLine(setup.hdr)];

  if (lines.some((l) => l.status === "no")) return { status: "no", title: "Sorry, Wavescan won't work here", lines };
  if (lines.some((l) => l.status === "fix")) return { status: "fix", title: "It will work after a small change", lines };
  return { status: "ok", title: "You're all set", lines };
}
