/**
 * The community apps that can import a Wavescan scan. They all take the same export, so adding
 * an app is one entry here. Set `ready` once the app's import works with Wavescan; until then
 * its card says "Coming soon".
 */
import { links } from "./links";

export interface ImportApp {
  name: string;
  /** Where the card's button goes. */
  href: string;
  /** What the app is for, in a sentence. */
  about: string;
  /** How importing works there, or what's still being built. */
  how: string;
  ready: boolean;
}

export const importApps: ImportApp[] = [
  {
    name: "Wuthering Tools",
    href: links.wutheringTools,
    about: "Plan builds with the echoes you really have.",
    how: "Open the import page and press “Paste from scanner”. It only adds echoes and never wipes your inventory. Echoes below +25 are skipped unless you choose to include them. It reads echoes with the same code as Wavescan, so names and stats match.",
    ready: true,
  },
  {
    name: "Tacet Lab",
    href: links.tacetLab,
    about: "A free optimizer for comparing builds, working out damage and planning teams.",
    how: "Tacet Lab is adding Wavescan imports now. It takes the same scan, so there's nothing new to learn.",
    ready: false,
  },
];
