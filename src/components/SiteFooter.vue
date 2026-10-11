<script setup lang="ts">
import BrandMark from "./BrandMark.vue";
import { links } from "../links";
</script>

<template>
  <footer>
    <div class="wrap">
      <div class="top">
        <BrandMark />
        <nav aria-label="Footer">
          <a :href="links.repo" rel="noopener">Source code</a>
          <a :href="links.releases" rel="noopener">Releases</a>
          <a :href="links.issues" rel="noopener">Issues</a>
          <a :href="links.wutheringTools" rel="noopener">Wuthering Tools</a>
          <a href="#safety">Privacy</a>
        </nav>
      </div>
      <p class="disclaimer">
        Wavescan is a fan project. It isn't affiliated with or endorsed by Kuro Games. Wuthering Waves and related names and images are trademarks of Kuro Games.
        The Wavescan app is open source under GPL-3.0.
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--line);
  padding-block: 40px 56px;
  font-size: 0.92rem;
  color: var(--muted);
}
.wrap {
  display: grid;
  gap: 24px;
}
.top {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
}
nav {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}
nav a {
  color: var(--muted);
}
nav a:hover {
  color: var(--fg);
}
.disclaimer {
  max-width: 80ch;
  font-size: 0.85rem;
}
</style>
