<script setup lang="ts">
import { releases } from "../roadmap";
</script>

<template>
  <section id="roadmap" class="section" aria-labelledby="road-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Roadmap</span>
        <h2 id="road-title">What's coming</h2>
        <p class="lede">We're starting with echoes, because typing them in takes the longest. Characters and weapons come next.</p>
      </div>

      <ol class="road">
        <li v-for="r in releases" :key="r.version" :class="{ now: r.current }">
          <span class="pin"></span>
          <div class="ver">
            {{ r.version }}<span v-if="r.current" class="tag">In testing</span>
          </div>
          <h3>{{ r.title }}</h3>
          <p>{{ r.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.road {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  position: relative;
}
.road::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 19px;
  height: 2px;
  background: linear-gradient(90deg, var(--gold) 0 18%, var(--line) 18%);
}
.road > li {
  position: relative;
  padding: 52px 20px 0 0;
}
.pin {
  position: absolute;
  top: 13px;
  left: 4px;
  width: 22px;
  height: 14px;
  background: var(--bg);
  border: 2px solid var(--line);
  transform: skewX(var(--slant));
}
.now .pin {
  border-color: var(--gold);
  background: var(--gold);
}
.ver {
  font: 700 1.6rem var(--display);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.now .ver {
  color: var(--gold);
}
.ver .tag {
  font-size: 0.62rem;
}
.road h3 {
  font-size: 1.05rem;
  margin: 6px 0;
}
.road p {
  color: var(--muted);
  font-size: 0.94rem;
}
@media (max-width: 860px) {
  .road {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
    padding-left: 36px;
  }
  .road::before {
    left: 9px;
    right: auto;
    top: 0;
    bottom: 0;
    width: 2px;
    height: auto;
    background: linear-gradient(180deg, var(--gold) 0 22%, var(--line) 22%);
  }
  .road > li {
    padding: 0;
  }
  .pin {
    left: -36px;
    top: 8px;
    width: 20px;
  }
}
</style>
