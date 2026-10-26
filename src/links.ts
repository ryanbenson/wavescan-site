/** Every outside link the site uses, in one place. */
const repo = "https://github.com/wavescan/wavescan";

export const links = {
  repo,
  releases: `${repo}/releases`,
  latestRelease: `${repo}/releases/latest`,
  issues: `${repo}/issues`,
  securityReport: `${repo}/security/advisories/new`,
  wutheringTools: "https://wutheringtools.com",
  fairPlay: "https://wutheringwaves.kurogames.com/en/main/news/detail/742",
  /** Empty until there's a public invite. The Discord card is hidden while it's empty. */
  discord: "",
} as const;
