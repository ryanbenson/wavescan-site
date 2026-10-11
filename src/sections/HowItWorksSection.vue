<script setup lang="ts">
import { ref } from "vue";
import AppIcon from "../components/AppIcon.vue";
import { links } from "../links";

type Mode = "watch" | "auto";
const modes: { id: Mode; label: string; tag: string }[] = [
  { id: "watch", label: "Watch mode", tag: "Recommended" },
  { id: "auto", label: "Auto mode", tag: "Optional" },
];
const active = ref<Mode>("watch");
const tabEls = ref<HTMLButtonElement[]>([]);

function onKey(e: KeyboardEvent, index: number) {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  const next = (index + (e.key === "ArrowRight" ? 1 : modes.length - 1)) % modes.length;
  active.value = modes[next]!.id;
  tabEls.value[next]?.focus();
}
</script>

<template>
  <section id="how" class="section" aria-labelledby="how-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">How it works</span>
        <h2 id="how-title">Two ways to scan</h2>
        <p class="lede">
          In <b>Watch mode</b>, you click through your echoes and Wavescan reads each one. In <b>Auto mode</b>, Wavescan does the clicking for you. We recommend Watch
          mode.
        </p>
      </div>

      <div class="tabs" role="tablist" aria-label="Scan modes">
        <button
          v-for="(m, i) in modes"
          :id="`tab-${m.id}`"
          :key="m.id"
          ref="tabEls"
          class="tab"
          role="tab"
          type="button"
          :aria-controls="`panel-${m.id}`"
          :aria-selected="active === m.id"
          :tabindex="active === m.id ? 0 : -1"
          @click="active = m.id"
          @keydown="onKey($event, i)"
        >
          {{ m.label }} <span class="tag">{{ m.tag }}</span>
        </button>
      </div>

      <div v-show="active === 'watch'" id="panel-watch" class="mode" role="tabpanel" aria-labelledby="tab-watch">
        <ol class="steps">
          <li>
            <div>
              <h3>Open your echoes</h3>
              <p>In Wuthering Waves, go to <span class="ui">Bag → Echoes</span>.</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Start watching</h3>
              <p>
                Open Wavescan. The <span class="ui">Game setup</span> list shows if it can see the game. On the <span class="ui">Scan</span> screen, type your in-game
                name once, then press <span class="ui">Start watching</span>.
              </p>
              <p class="tip">On a Mac, the first time, macOS asks for <b>Screen Recording</b> permission. Allow it, then reopen Wavescan.</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Click through your echoes</h3>
              <p>Go at your own pace. Each time the echo details change, Wavescan reads them. You see a counter and how many need a look.</p>
              <p class="tip">Only one screen? Press <b>Mini window</b> for a small counter that stays on top of the game.</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Review</h3>
              <p>
                Press <span class="ui">Stop and review</span>. Anything Wavescan wasn't sure about is marked <span class="flag">CHECK</span>. Press
                <span class="ui">Check them now</span> to fix them one by one. It only offers values the game can really roll.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Send to Wuthering Tools</h3>
              <p>Press <span class="ui">Copy scan for Wuthering Tools</span> and paste it on the import page.</p>
            </div>
          </li>
        </ol>
        <div class="side">
          <div class="card frame">
            <h3>Why we recommend Watch mode</h3>
            <p>Watch mode only looks at the game. It never clicks or types anything for you, so the Fair Play concerns of Auto mode don't apply.</p>
          </div>
          <div class="card frame">
            <h3>Why does it ask for my in-game name?</h3>
            <p>
              For your main character, the game shows the name <i>you</i> chose instead of “Rover”. Wavescan needs your name to know which echoes Rover is wearing.
              Your name stays on your computer. The scan just says “Rover”.
            </p>
          </div>
          <div class="card frame">
            <h3>Closed it by mistake?</h3>
            <p>Wavescan keeps your current scan on your computer. Next time you open it, you can carry on where you stopped.</p>
          </div>
        </div>
      </div>

      <div v-show="active === 'auto'" id="panel-auto" class="mode" role="tabpanel" aria-labelledby="tab-auto">
        <ol class="steps">
          <li>
            <div>
              <h3>Read the warning and allow access</h3>
              <p>
                Open <span class="ui">Scan → Auto mode</span>. It walks you through the Fair Play warning, permissions and getting the game ready. Then you type
                <code>I understand</code>. You type it again for every auto scan.
              </p>
              <p class="tip">
                <b>Windows:</b> right-click Wavescan and choose <b>Run as administrator</b>. Windows blocks clicks from normal apps into the game.<br />
                <b>Mac:</b> macOS asks for <b>Accessibility</b> permission so Wavescan can click.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Get the game ready</h3>
              <p>
                Go to <span class="ui">Bag → Echoes</span> and sort by <span class="ui">Level</span>, highest first. Choose to read all echoes, or only from a level
                up, like <span class="ui">+25 only</span>.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Hands off</h3>
              <p>
                Press <span class="ui">Start auto scan</span> and don't touch the mouse or keyboard. Wavescan scrolls to the top, then reads every echo. A full bag of
                3,000 echoes takes about 8 minutes.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Stop any time</h3>
              <p>Move the mouse or press <kbd>F8</kbd>. Wavescan stops right away and keeps everything it read so far.</p>
            </div>
          </li>
        </ol>
        <div class="side">
          <div class="warnbox">
            <h3><AppIcon name="warn" :size="20" />Please read before using Auto mode</h3>
            <p>
              Kuro Games' <a :href="links.fairPlay" rel="noopener">Fair Play Policy</a> does not allow third-party tools and macros. Auto mode sends mouse clicks to
              the game, and some people see that as a macro.
            </p>
            <p>
              We don't know of anyone banned for scanning, and Wavescan never touches the game's memory or files. But Kuro hasn't said tools like this are allowed, so
              <b>there is some risk to your account</b>. Watch mode doesn't have this risk.
            </p>
          </div>
          <div class="card frame">
            <h3>One small gap</h3>
            <p>
              If two echoes next to each other look exactly the same (same echo, same main stat, no substats yet), Wavescan only reads the first. This mostly happens
              with +0 echoes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tabs {
  display: inline-flex;
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 4px;
  gap: 4px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.tab {
  font: 600 1rem var(--display);
  letter-spacing: 0.02em;
  background: none;
  border: 0;
  color: var(--muted);
  padding: 0.6rem 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.tab[aria-selected="true"] {
  background: var(--accent);
  color: var(--accent-ink);
}
.mode {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}
@media (max-width: 860px) {
  .mode {
    grid-template-columns: minmax(0, 1fr);
  }
}
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  counter-reset: step;
}
.steps > li {
  counter-increment: step;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 16px;
  padding-bottom: 22px;
  position: relative;
}
.steps > li::before {
  content: counter(step);
  font: 700 1.15rem var(--display);
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  color: var(--accent);
  border: 1px solid var(--accent);
  background: var(--bg);
  position: relative;
  z-index: 1;
}
.steps > li:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 20px;
  top: 40px;
  bottom: 0;
  width: 1px;
  background: var(--line);
}
.steps h3 {
  font-size: 1.1rem;
  margin: 8px 0 4px;
}
.steps p {
  color: var(--muted);
}
.steps .tip {
  margin-top: 8px;
  font-size: 0.92rem;
  color: var(--fg);
  background: var(--surface);
  border-left: 2px solid var(--violet);
  padding: 0.45rem 0.7rem;
}
.side {
  display: grid;
  gap: 16px;
}
.warnbox {
  border: 1px solid color-mix(in srgb, var(--amber) 55%, transparent);
  background: var(--amber-soft);
  padding: 20px;
}
.warnbox h3 {
  color: var(--amber);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.08rem;
  margin-bottom: 8px;
}
.warnbox p {
  font-size: 0.96rem;
}
.warnbox p + p {
  margin-top: 8px;
}
</style>
