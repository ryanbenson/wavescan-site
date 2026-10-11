/** Every outside link the site uses, in one place. */
const repo = "https://github.com/wavescan/wavescan";

export const links = {
  repo,
  releases: `${repo}/releases`,
  issues: `${repo}/issues`,
  testerBuild: `${repo}/releases/tag/tester-build`,
  testingGuide: `${repo}/blob/main/docs/testing-guide.md`,
  securityReport: `${repo}/security/advisories/new`,
  wutheringTools: "https://wutheringtools.com",
  fairPlay: "https://wutheringwaves.kurogames.com/en/main/news/detail/742",
  /** Empty until there's a public invite. Discord buttons are hidden while it's empty. */
  discord: "",
} as const;
