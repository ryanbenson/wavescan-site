<script setup lang="ts">
import AppIcon from "../components/AppIcon.vue";

/**
 * Until the first signed release, the buttons say "Coming soon". When v0.1 ships, set `href`
 * to the matching file on the GitHub Releases page.
 */
const downloads: { os: string; text: string; href: string | null }[] = [
  {
    os: "Windows",
    text: "Windows 10 or 11, 64-bit. On Windows 10, a yellow border shows around the game while Wavescan reads it. That's normal.",
    href: null,
  },
  {
    os: "Mac",
    text: "macOS 13 or newer, on a Mac with an Apple chip (M1 or newer). Wuthering Waves doesn't run on Intel Macs.",
    href: null,
  },
];
</script>

<template>
  <section id="download" class="section" aria-labelledby="dl-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Download</span>
        <h2 id="dl-title">Get Wavescan</h2>
        <p class="lede">Wavescan is still being tested. Signed downloads will appear here when version 0.1 is ready.</p>
      </div>
      <div class="grid">
        <div v-for="d in downloads" :key="d.os" class="card panel">
          <AppIcon name="logo" :size="128" class="os-mark" />
          <h3>{{ d.os }}</h3>
          <p>{{ d.text }}</p>
          <a v-if="d.href" class="btn btn-primary" :href="d.href" rel="noopener"><span>Download for {{ d.os }}</span></a>
          <span v-else class="btn btn-primary" aria-disabled="true"><span>Coming soon</span></span>
        </div>
      </div>
      <p class="note">Can't wait? You can try early test builds and help us find problems. See <a href="#testers">Help us test</a>.</p>
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
