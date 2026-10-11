<script setup lang="ts">
import AppIcon from "../components/AppIcon.vue";
import CompatChecker from "../components/CompatChecker.vue";

const resolutions = ["1920×1080", "2560×1440", "3840×2160", "1920×1200", "2880×1800"];
</script>

<template>
  <section id="requirements" class="section" aria-labelledby="req-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Before you start</span>
        <h2 id="req-title">Will it work for me?</h2>
        <p class="lede">Wavescan reads the game screen, so the game needs to look the way Wavescan expects. Most players only need to check four things.</p>
      </div>
      <div class="grid">
        <ul class="reqs">
          <li>
            <span class="ico"><AppIcon name="lang" :size="22" /></span>
            <div>
              <h3>Game language: English</h3>
              <p class="muted">Other languages are planned. You can change the game's text language in Settings.</p>
            </div>
          </li>
          <li>
            <span class="ico"><AppIcon name="screen" :size="22" /></span>
            <div>
              <h3>Screen shape: 16:9 or 16:10</h3>
              <p class="muted">Fullscreen or windowed are both fine. Wide screens (21:9) don't work yet.</p>
              <div class="res">
                <span v-for="r in resolutions" :key="r">{{ r }}</span>
              </div>
            </div>
          </li>
          <li>
            <span class="ico"><AppIcon name="hdr" :size="22" /></span>
            <div>
              <h3>HDR: off while scanning</h3>
              <p class="muted">HDR changes the colours on screen, and that confuses the reader. Turn it back on when you're done.</p>
            </div>
          </li>
          <li>
            <span class="ico"><AppIcon name="bag" :size="22" /></span>
            <div>
              <h3>Open Bag → Echoes</h3>
              <p class="muted">Wavescan reads the echo details panel on the right side of this screen.</p>
            </div>
          </li>
        </ul>
        <CompatChecker />
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}
@media (max-width: 860px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
.reqs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;
}
.reqs li {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  gap: 14px;
}
.ico {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  color: var(--accent);
  background: var(--surface);
}
h3 {
  font-size: 1.08rem;
  margin-bottom: 2px;
}
.res {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.res span {
  font-family: var(--mono);
  font-size: 0.78rem;
  padding: 0.1rem 0.45rem;
  border: 1px solid var(--line);
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}
</style>
