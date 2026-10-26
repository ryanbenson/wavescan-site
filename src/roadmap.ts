/**
 * The roadmap shown on the site, in plain words. Keep it in step with the app repo's
 * docs/roadmap.md (Phase 7 is v0.1; "Later" holds v0.2, v0.3 and beyond).
 */

export interface Release {
  version: string;
  title: string;
  text: string;
  /** The newest release, out now. */
  current?: boolean;
}

export const releases: Release[] = [
  { version: "v0.1", title: "Echoes", text: "Watch and Auto mode on Windows and Mac. Sets, levels and who has each echo equipped.", current: true },
  { version: "v0.2", title: "Characters", text: "Level, ascension, weapon, forte levels, resonance chain and equipped echoes." },
  { version: "v0.3", title: "Weapons", text: "Your whole weapon inventory." },
  { version: "Later", title: "More players", text: "More game languages and ultrawide (21:9) screens." },
];

