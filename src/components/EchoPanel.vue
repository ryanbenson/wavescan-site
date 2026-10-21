<!--
  An example echo, drawn the way the app's echo card draws it (which follows the game's echo
  panel). The values are realistic rolls but made up. The substats are read one at a time, and
  the counter below ticks up after each echo.
-->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import echoIcon from "../assets/echoes/calamity-effigy.webp";

// `rolls` is how high the value sits among the values the game can roll, out of 8.
const substats = [
  { name: "Crit. DMG", value: "21.0%", rolls: 8 },
  { name: "ATK", value: "10.1%", rolls: 6 },
  { name: "Energy Regen", value: "9.2%", rolls: 4 },
  { name: "Heavy Attack DMG Bonus", value: "8.6%", rolls: 4, check: true },
  { name: "ATK", value: "40", rolls: 4 },
];

const TOTAL = 250;
const BLOCKS = 24;
const STEP_MS = 520;

const reading = ref(-1);
const scanned = ref(128);
let timer = 0;

function blockState(i: number) {
  const filled = Math.round((scanned.value / TOTAL) * BLOCKS);
  return i < filled - 1 ? "on" : i === filled - 1 ? "now" : "";
}

onMounted(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  timer = window.setInterval(() => {
    reading.value++;
    if (reading.value > substats.length) {
      reading.value = -1;
      scanned.value = scanned.value >= TOTAL - 1 ? 128 : scanned.value + 1;
    }
  }, STEP_MS);
});

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div class="echo panel" role="img" aria-label="Example: Wavescan reading a 5-star Calamity Effigy echo at +25. One substat is marked check.">
    <div class="hd" aria-hidden="true">
      <div class="art"><img :src="echoIcon" alt="" width="64" height="64" /></div>
      <div>
        <div class="name">Calamity Effigy</div>
        <div class="meta"><span>Cost 4</span><span class="stars">★★★★★</span><span>Heart of Evil's Purge</span></div>
      </div>
      <div class="lv">+25<small>LEVEL</small></div>
    </div>
    <div class="lvbar" aria-hidden="true"></div>
    <div class="main" aria-hidden="true"><b>Crit. Rate</b><span>22.0%</span></div>
    <div class="flat" aria-hidden="true">ATK 150 · Equipped by Qingxiao</div>
    <ul class="stats" aria-hidden="true">
      <li v-for="(s, i) in substats" :key="i" :class="{ check: s.check, reading: i === reading && !s.check }">
        <span class="label">{{ s.name }}<span v-if="s.check" class="flag">check</span></span>
        <span class="pips"><i v-for="n in 8" :key="n" :class="{ on: n <= s.rolls }"></i></span>
        <span class="val">{{ s.value }}</span>
      </li>
    </ul>
    <div class="ft" aria-hidden="true">
      <div class="count">
        <span>Echo <b>{{ scanned }}</b> of {{ TOTAL }}</span><span class="warn">2 to check</span>
      </div>
      <div class="blocks"><i v-for="n in BLOCKS" :key="n" :class="blockState(n - 1)"></i></div>
    </div>
  </div>
</template>

<style scoped>
.echo {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 440px;
  justify-self: center;
  overflow: hidden;
  box-shadow: 0 30px 60px -36px var(--shadow);
  font-variant-numeric: tabular-nums;
}
.hd {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 18px 20px 12px;
}
.art {
  width: 64px;
  height: 64px;
  border-radius: var(--r-sm);
  background: var(--surface-2);
  position: relative;
  overflow: hidden;
}
.art img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.art::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: var(--gold);
}
.name {
  font: 600 1.3rem var(--display);
  color: var(--gold);
  line-height: 1.1;
}
.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 2px 12px;
  margin-top: 5px;
  font-size: 0.78rem;
  color: var(--muted);
}
.stars {
  color: var(--gold);
  letter-spacing: 1px;
}
.lv {
  font: 600 1.6rem var(--display);
  line-height: 1;
  text-align: right;
}
.lv small {
  display: block;
  margin-top: 4px;
  font: 700 0.62rem var(--body);
  letter-spacing: 0.14em;
  color: var(--muted);
}
.lvbar {
  height: 2px;
  margin: 0 20px;
  background: var(--gold);
}
.main {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 20px 2px;
}
.main span {
  font: 600 1.1rem var(--mono);
}
.flat {
  padding: 0 20px 8px;
  font-size: 0.8rem;
  color: var(--muted);
}
.stats {
  list-style: none;
  margin: 0;
  padding: 4px 12px 12px;
}
.stats li {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 60px 58px;
  gap: 10px;
  align-items: center;
  padding: 6px 8px;
  font-size: 0.88rem;
  border-radius: 1px;
  transition: background 0.3s;
}
.stats li:nth-child(odd) {
  background: color-mix(in srgb, var(--fg) 5%, transparent);
}
.stats li.reading {
  background: color-mix(in srgb, var(--gold) 16%, transparent);
}
.stats li.check {
  background: var(--check-soft);
  outline: 1px solid color-mix(in srgb, var(--check) 70%, transparent);
}
.label {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.val {
  text-align: right;
  font: 600 0.85rem var(--mono);
}
.check .val {
  color: var(--check);
}
.pips {
  display: flex;
  gap: 2px;
  padding-right: 4px;
}
.pips i {
  flex: 1;
  height: 6px;
  transform: skewX(var(--slant));
  background: color-mix(in srgb, var(--fg) 14%, transparent);
}
.pips i.on {
  background: var(--gold);
}
.ft {
  display: grid;
  gap: 8px;
  padding: 12px 20px 16px;
  border-top: 1px solid var(--line);
  font-size: 0.82rem;
  color: var(--muted);
}
.count {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}
.count b {
  font-family: var(--mono);
  color: var(--fg);
}
.blocks {
  display: flex;
  gap: 3px;
  height: 10px;
  padding: 0 4px;
}
.blocks i {
  flex: 1;
  transform: skewX(var(--slant));
  background: color-mix(in srgb, var(--fg) 12%, transparent);
}
.blocks i.on {
  background: var(--primary);
}
.blocks i.now {
  background: color-mix(in srgb, var(--primary) 45%, transparent);
}
@media (max-width: 420px) {
  .stats li {
    grid-template-columns: minmax(0, 1fr) 58px;
  }
  .pips {
    display: none;
  }
}
</style>
