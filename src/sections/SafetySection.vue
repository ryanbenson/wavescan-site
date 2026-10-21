<script setup lang="ts">
import CopyCommand from "../components/CopyCommand.vue";
</script>

<template>
  <section id="safety" class="section" aria-labelledby="safety-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Privacy &amp; safety</span>
        <h2 id="safety-title">Built so you don't have to trust us</h2>
        <p class="lede">Wavescan does its work on your computer. It doesn't collect your data, and all the code is public, so anyone can check what it does.</p>
      </div>

      <div class="cols">
        <div class="card panel yes">
          <h3><span class="tag">does</span>What Wavescan does</h3>
          <ul class="plist">
            <li><span class="mark ok"></span><span>Takes pictures of <b>only the Wuthering Waves window</b>. Never your whole screen or other apps.</span></li>
            <li><span class="mark ok"></span><span>Reads the text in those pictures <b>on your computer</b>. Nothing is uploaded.</span></li>
            <li>
              <span class="mark ok"></span><span>Keeps your current scan (stats only, no pictures) so you don't lose it. <span class="ui">Clear this scan</span> deletes it.</span>
            </li>
            <li><span class="mark ok"></span><span>In Auto mode only: sends clicks and scrolls to the game window, and listens for <kbd>F8</kbd> so you can stop it.</span></li>
          </ul>
        </div>
        <div class="card panel never">
          <h3><span class="tag">never</span>What Wavescan never does</h3>
          <ul class="plist">
            <li><span class="mark no"></span><span>Never reads or changes the game's memory or files. Nothing is injected into the game.</span></li>
            <li><span class="mark no"></span><span>Never collects your data. No accounts, no analytics, no tracking.</span></li>
            <li><span class="mark no"></span><span>Never uploads your scan. It stays on your computer until <i>you</i> paste it into Wuthering Tools.</span></li>
            <li><span class="mark no"></span><span>Never reads your <b>User ID</b>. It skips that corner of the screen and blacks it out of any picture.</span></li>
            <li><span class="mark no"></span><span>Never saves screenshots, unless you turn on “Save debug frames” yourself.</span></li>
          </ul>
        </div>
      </div>

      <div class="table-wrap">
        <table>
          <caption>
            The only internet connections Wavescan makes
          </caption>
          <thead>
            <tr>
              <th scope="col">Connects to</th>
              <th scope="col">Why</th>
              <th scope="col">What it sends</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>github.com</code></td>
              <td>Checks for a new version of Wavescan</td>
              <td>Nothing about you. Just a request for the latest version number.</td>
            </tr>
            <tr>
              <td><code>www.wutheringtools.com</code></td>
              <td>
                Downloads the newest list of echoes after a game update. You won't need to download a new version of Wavescan every time the game adds echoes.
                <span class="muted">(planned)</span>
              </td>
              <td>Nothing about you. Scans always work offline with the list that comes with the app.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="note">
        You can turn each one off in <span class="ui">Settings → Network</span>. <span class="ui">Help &amp; feedback → What Wavescan did this session</span> lists what it
        captured, how many clicks it sent and which pages it opened.
      </p>

      <div class="verify">
        <div>
          <h3>Only download from here or GitHub</h3>
          <p class="muted">
            Every download is <b>signed</b>, so Windows and macOS know who made it. It's also <b>built by GitHub</b> straight from the public code. If you want, you can
            check that your file is the real one.
          </p>
        </div>
        <div>
          <p class="muted small">Run this and compare the result with the checksum on the Releases page:</p>
          <CopyCommand label="Windows" command="Get-FileHash .\Wavescan_*.exe" />
          <CopyCommand label="Mac" command="shasum -a 256 ~/Downloads/Wavescan_*.dmg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cols {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--gap);
}
@media (max-width: 820px) {
  .cols {
    grid-template-columns: minmax(0, 1fr);
  }
}
.cols .card {
  padding: 20px 12px 12px;
}
.cols h3 {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0 8px;
}
.yes h3 .tag {
  color: var(--ok);
}
.never h3 .tag {
  color: var(--danger);
}
/* Banded rows, like the stat rows on the app's echo card. */
.plist {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
}
.card .plist li {
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr);
  gap: 10px;
  padding: 9px 8px;
  font-size: 0.97rem;
  color: var(--fg);
  border-radius: 1px;
}
.plist li:nth-child(odd) {
  background: color-mix(in srgb, var(--fg) 4%, transparent);
}
.plist .mark {
  margin-top: 8px;
}
.table-wrap {
  overflow-x: auto;
  margin-top: 36px;
}
table {
  border-collapse: collapse;
  width: 100%;
  min-width: 560px;
  font-size: 0.95rem;
}
caption {
  text-align: left;
  padding: 0 0 12px;
  font: 600 1.05rem var(--display);
}
th,
td {
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
}
th {
  font: 700 0.72rem var(--body);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}
td {
  border-bottom-color: color-mix(in srgb, var(--line) 60%, transparent);
}
tr:last-child td {
  border-bottom: 0;
}
td code {
  color: var(--gold);
}
.verify {
  margin-top: 36px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 28px;
  align-items: start;
}
@media (max-width: 820px) {
  .verify {
    grid-template-columns: minmax(0, 1fr);
  }
}
.verify h3 + p {
  margin-top: 8px;
}
.small {
  font-size: 0.95rem;
}
</style>
