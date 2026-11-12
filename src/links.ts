/** Every outside link the site uses, in one place. */
const repo = "https://github.com/wavescan/wavescan";

export const links = {
  repo,
  releases: `${repo}/releases`,
  latestRelease: `${repo}/releases/latest`,
  issues: `${repo}/issues`,
  securityReport: `${repo}/security/advisories/new`,
  wutheringTools: "https://wutheringtools.com",
  tacetLab: "https://dj12421.github.io/Tacet-Lab/?import=1",
  fairPlay: "https://wutheringwaves.kurogames.com/en/main/news/detail/742",
  /** Permanent invite to the Wavescan Discord server. */
  discord: "https://discord.gg/2dP2SnsZXM",
} as const;
