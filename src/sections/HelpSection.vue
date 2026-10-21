<template>
  <section id="help" class="section" aria-labelledby="help-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Help</span>
        <h2 id="help-title">Something not working?</h2>
        <p class="lede">Most problems come from the game's settings. Wavescan tells you what's wrong, and these fixes cover the common cases.</p>
      </div>
      <div class="grid">
        <div class="qa">
          <details>
            <summary>“Game window not found”</summary>
            <div class="ans"><p>Make sure Wuthering Waves is running and isn't minimised.</p></div>
          </details>
          <details>
            <summary>“Layout not recognised”</summary>
            <div class="ans">
              <p>Usually one of these. The message tells you which one:</p>
              <ul>
                <li>The game isn't in English.</li>
                <li>The window isn't 16:9 or 16:10.</li>
                <li>HDR is on.</li>
                <li>You're not on the <span class="ui">Bag → Echoes</span> screen.</li>
              </ul>
            </div>
          </details>
          <details>
            <summary>Some values are wrong</summary>
            <div class="ans">
              <p>
                Fix them on the Review screen before you export. Click a value marked <span class="flag">check</span>, then pick what the game shows, or press
                <span class="ui">Looks right</span>.
              </p>
              <p>Then press <span class="ui">Report this misread</span>. It helps us make the reader better.</p>
            </div>
          </details>
          <details>
            <summary>Mac: Wavescan shows a black window</summary>
            <div class="ans">
              <p>Go to <span class="ui">System Settings → Privacy &amp; Security → Screen Recording</span>, turn on Wavescan, then quit and reopen it.</p>
            </div>
          </details>
          <details>
            <summary>Mac: “permission needed: Accessibility”</summary>
            <div class="ans">
              <p>Go to <span class="ui">System Settings → Privacy &amp; Security → Accessibility</span>, turn on Wavescan, then try again.</p>
            </div>
          </details>
          <details>
            <summary>Auto mode doesn't click anything (Windows)</summary>
            <div class="ans">
              <p>Auto mode needs Wavescan to run as administrator. Close it, right-click it, choose <span class="ui">Run as administrator</span> and try again.</p>
            </div>
          </details>
          <details>
            <summary><kbd>F8</kbd> doesn't stop Auto mode</summary>
            <div class="ans"><p>Another app is probably using F8. Move the mouse instead. That always stops it.</p></div>
          </details>
          <details>
            <summary>Windows says “Windows protected your PC”</summary>
            <div class="ans"><p>This shouldn't happen with signed downloads. Check that you got Wavescan from this site or the GitHub Releases page.</p></div>
          </details>
        </div>

        <div class="diag panel">
          <h3>Check your setup with Diagnostics</h3>
          <p>
            Open <span class="ui">Diagnostics</span> in the app with an echo selected. It checks that Wavescan can find, capture and read the game, and shows exactly
            where it reads.
          </p>
          <div class="shot" aria-hidden="true">
            <div class="grid-lines"></div>
            <div class="box" style="left: 62%; top: 12%; width: 30%; height: 9%"></div>
            <div class="box" style="left: 62%; top: 25%; width: 16%; height: 6%"></div>
            <div class="box" style="left: 62%; top: 36%; width: 30%; height: 14%"></div>
            <div class="box" style="left: 62%; top: 54%; width: 30%; height: 26%"></div>
            <div class="mask"></div>
          </div>
          <p class="cap">Each box should sit on its text. Your User ID is blacked out.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
.diag {
  padding: 22px;
}
.diag h3 {
  margin-bottom: 8px;
}
.diag p {
  color: var(--muted);
  font-size: 0.96rem;
}
.shot {
  margin-top: 16px;
  border-radius: var(--r-sm);
  background: var(--bg-2);
  aspect-ratio: 16 / 9;
  max-width: 100%;
  position: relative;
  overflow: hidden;
}
.grid-lines {
  position: absolute;
  left: 4%;
  top: 12%;
  width: 52%;
  height: 76%;
  background:
    repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 13%),
    repeating-linear-gradient(0deg, var(--line) 0 1px, transparent 1px 22%);
  opacity: 0.8;
}
.box {
  position: absolute;
  border: 1.5px solid var(--gold);
}
.mask {
  position: absolute;
  right: 3%;
  bottom: 4%;
  width: 22%;
  height: 6%;
  background: var(--fg);
}
.diag .cap {
  font: 400 0.78rem var(--mono);
  margin-top: 8px;
}
</style>
