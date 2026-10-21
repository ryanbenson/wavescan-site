<script setup lang="ts">
import { links } from "../links";
</script>

<template>
  <section id="testers" class="section testers" aria-labelledby="test-title">
    <div class="wrap">
      <div>
        <span class="eyebrow">Help us test</span>
        <h2 id="test-title">Got a Mac with an Apple chip?</h2>
        <p class="lede">We need players to try Wavescan before it's released. Mac players are the most wanted right now. We also want to test:</p>
        <ul>
          <li>Different screen sizes, both 16:9 and 16:10</li>
          <li>Big echo bags that need a lot of scrolling</li>
          <li>Low-level echoes and echoes with more than one possible set</li>
        </ul>
      </div>
      <div class="card panel">
        <h3>How testing works</h3>
        <p>Download the latest test build, run Diagnostics, do a short scan and post the report in the Discord testing thread. It takes about 15 minutes.</p>
        <div class="cta-row">
          <a class="btn btn-primary" :href="links.testerBuild" rel="noopener"><span>Get a test build</span></a>
          <a class="btn btn-ghost" :href="links.testingGuide" rel="noopener"><span>Read the testing guide</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testers {
  background: var(--bg-2);
}
.wrap {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 40px;
  align-items: center;
}
@media (max-width: 820px) {
  .wrap {
    grid-template-columns: minmax(0, 1fr);
  }
}
h2,
.lede {
  margin-top: 14px;
}
ul {
  margin: 14px 0 0;
  padding-left: 1.2rem;
  color: var(--muted);
  display: grid;
  gap: 6px;
}
.cta-row {
  margin-top: 16px;
}
</style>
