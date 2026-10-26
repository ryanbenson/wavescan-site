<script setup lang="ts">
import AppIcon from "../components/AppIcon.vue";
import { links } from "../links";

/** Each button opens the newest release on GitHub, where the installer for each system is listed. */
const downloads: { os: string; text: string; href: string }[] = [
  {
    os: "Windows",
    text: "Windows 10 or 11, 64-bit. On Windows 10, a yellow border shows around the game while Wavescan reads it. That's normal.",
    href: links.latestRelease,
  },
  {
    os: "Mac",
    text: "macOS 13 or newer, on a Mac with an Apple chip (M1 or newer). Wuthering Waves doesn't run on Intel Macs.",
    href: links.latestRelease,
  },
];
</script>

<template>
  <section id="download" class="section" aria-labelledby="dl-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Download</span>
        <h2 id="dl-title">Get Wavescan</h2>
        <p class="lede">Free, signed downloads for Windows and Mac. Each button opens the latest release on GitHub: get the <code>.exe</code> for Windows or the <code>.dmg</code> for Mac.</p>
      </div>
      <div class="grid">
        <div v-for="d in downloads" :key="d.os" class="card panel">
          <AppIcon name="logo" :size="128" class="os-mark" />
          <h3>{{ d.os }}</h3>
          <p>{{ d.text }}</p>
          <a class="btn btn-primary" :href="d.href" rel="noopener"><span>Download for {{ d.os }}</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--gap);
}
@media (max-width: 820px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
.card {
  display: grid;
  gap: 10px;
  align-content: start;
  overflow: hidden;
}
.card h3 {
  font-size: 1.4rem;
}
/* A faint cube in the corner of each download card. */
.os-mark {
  position: absolute;
  right: -20px;
  bottom: -24px;
  color: var(--surface-2);
}
.card > :not(.os-mark) {
  position: relative;
}
.btn {
  margin-top: 6px;
  width: max-content;
  max-width: 100%;
}
</style>
