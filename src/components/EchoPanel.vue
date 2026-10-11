<!--
  An example echo, drawn like the game's echo details panel, with a scan beam passing over it.
  The values are realistic rolls but made up. Each substat lights up as the beam reaches it.
-->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import echoIcon from "../assets/echoes/calamity-effigy.webp";

const mainStats = [
  { name: "Crit. Rate", value: "22.0%" },
  { name: "ATK", value: "150" },
];
const substats = [
  { name: "Crit. DMG", value: "21.0%" },
  { name: "ATK", value: "10.1%" },
  { name: "Energy Regen", value: "9.2%" },
  { name: "Heavy Attack DMG Bonus", value: "8.6%", check: true },
  { name: "ATK", value: "40" },
];

const SWEEP_MS = 4200;
// The beam crosses the panel in the first 55% of each sweep (the `sweep` keyframes below).
const BEAM_SHARE = 0.55;

const readCount = ref(substats.length);
const scanned = ref(128);
let frame = 0;

onMounted(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const start = performance.now();
  let lastSweep = 0;
  const tick = (now: number) => {
    const elapsed = now - start;
    const sweep = Math.floor(elapsed / SWEEP_MS);
    const p = (elapsed % SWEEP_MS) / SWEEP_MS;
    readCount.value = p > 0.92 ? 0 : Math.max(0, Math.floor((p / BEAM_SHARE) * substats.length + 0.6) - 1);
    if (sweep !== lastSweep) {
      lastSweep = sweep;
      scanned.value++;
    }
    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
});

onUnmounted(() => cancelAnimationFrame(frame));
</script>

<template>
  <div class="panel-wrap" role="img" aria-label="Example: Wavescan reading a 5-star Calamity Effigy echo at +25. One substat is marked check.">
    <div class="echo frame" aria-hidden="true">
      <div class="beam"></div>
      <div class="top">
        <img class="art" :src="echoIcon" alt="" width="68" height="68" />
        <div>
          <div class="name">Calamity Effigy</div>
          <div class="meta"><span class="stars">★★★★★</span><span class="lvl">+25</span><span>Cost 4</span></div>
        </div>
      </div>
      <ul class="stats">
        <li v-for="(s, i) in mainStats" :key="`m${i}`" class="main"><span>{{ s.name }}</span><span>{{ s.value }}</span></li>
        <li v-for="(s, i) in substats" :key="`s${i}`" class="sub" :class="{ read: i < readCount }">
          <span>{{ s.name }}<span v-if="s.check" class="flag">CHECK</span></span><span>{{ s.value }}</span>
        </li>
      </ul>
      <div class="foot">
        <span class="chip"><span class="dot"></span>Heart of Evil's Purge</span>
        <span>Equipped by: Qingxiao</span>
      </div>
    </div>
    <div class="uid" aria-hidden="true">UID <b></b></div>
    <div class="toast" aria-hidden="true">
      <span>Read <strong>{{ scanned }}</strong></span><span class="warn">2 to check</span>
    </div>
  </div>
</template>

<style scoped>
.panel-wrap {
  position: relative;
  max-width: 440px;
  width: 100%;
  justify-self: center;
  margin-bottom: 24px;
}
.echo {
  padding: 22px 22px 18px;
  overflow: hidden;
}
.top {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.art {
  flex: none;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  object-fit: cover;
  background: radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--violet) 45%, var(--surface-2)), var(--surface-2) 70%);
  border: 2px solid var(--gold);
  box-shadow: 0 0 24px color-mix(in srgb, var(--violet) 35%, transparent);
}
.name {
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.35rem;
}
.meta {
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 2px;
  flex-wrap: wrap;
}
.stars {
  color: var(--gold);
  letter-spacing: 2px;
}
.lvl {
  color: var(--fg);
  background: var(--surface-2);
  border: 1px solid var(--line);
  padding: 0 0.4rem;
}
.stats {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
  display: grid;
  gap: 2px;
  font-variant-numeric: tabular-nums;
}
.stats li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 0.42rem 0.6rem;
  position: relative;
  font-size: 0.95rem;
}
.stats li > span:last-child {
  font-family: var(--mono);
  font-weight: 600;
}
.main {
  background: var(--surface-2);
  font-weight: 700;
}
.main > span:last-child {
  color: var(--gold);
}
.sub {
  border-bottom: 1px dashed var(--line);
}
.sub::before {
  content: "";
  position: absolute;
  inset: 2px 0;
  border: 1px solid var(--accent);
  opacity: 0;
  transition: opacity 0.3s;
}
.sub.read::before {
  opacity: 0.65;
}
.flag {
  margin-left: 0.5rem;
}
.foot {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 14px;
  font-size: 0.85rem;
  color: var(--muted);
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  padding: 0.15rem 0.55rem;
  border: 1px solid var(--line);
  background: var(--surface-2);
  color: var(--fg);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--violet);
}
.uid {
  position: absolute;
  right: 10px;
  bottom: -34px;
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--muted);
  display: flex;
  gap: 6px;
  align-items: center;
}
.uid b {
  display: inline-block;
  width: 86px;
  height: 12px;
  background: var(--fg);
}
.beam {
  position: absolute;
  left: 0;
  right: 0;
  height: 56px;
  top: -60px;
  background: linear-gradient(180deg, transparent, var(--accent-soft) 70%, color-mix(in srgb, var(--accent) 55%, transparent));
  border-bottom: 2px solid var(--accent);
  pointer-events: none;
  animation: sweep 4.2s cubic-bezier(0.55, 0.1, 0.35, 1) infinite;
}
@keyframes sweep {
  0% {
    top: -60px;
  }
  55%,
  100% {
    top: 100%;
  }
}
.toast {
  position: absolute;
  left: -14px;
  bottom: -22px;
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 0.6rem 0.85rem;
  display: flex;
  gap: 14px;
  font-size: 0.85rem;
  box-shadow: 0 12px 30px -12px var(--shadow);
  font-variant-numeric: tabular-nums;
}
.toast strong {
  font-family: var(--mono);
  color: var(--accent);
}
@media (max-width: 480px) {
  .toast {
    left: 0;
  }
  .uid {
    display: none;
  }
}
</style>
