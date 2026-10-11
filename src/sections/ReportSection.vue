<script setup lang="ts">
import { links } from "../links";
</script>

<template>
  <section id="report" class="section" aria-labelledby="report-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Report a problem</span>
        <h2 id="report-title">Tell us what went wrong</h2>
        <p class="lede">Every report helps the reader get better. Wavescan writes the report for you, and you see every word before anything is sent.</p>
      </div>
      <div class="grid">
        <div class="card frame">
          <h3>From the app (easiest)</h3>
          <p>Open <span class="ui">Help &amp; feedback → Report a problem</span>, or press <span class="ui">Report</span> on an echo. Choose what went wrong and add a note.</p>
          <p><span class="ui">Open on GitHub</span> opens a new issue with the report filled in. Nothing is posted until you press <span class="ui">Submit</span>.</p>
          <p>The report includes the version, screen size and what Wavescan read. It never includes pictures or your User ID.</p>
          <a class="btn btn-ghost" :href="links.issues" rel="noopener"><span>See open issues on GitHub</span></a>
        </div>
        <div class="card frame">
          <h3>No GitHub account?</h3>
          <p>Press <span class="ui">Copy text</span> in the report window and share it with the testers on Discord.</p>
          <p>Want to add a picture? Use <span class="ui">Copy picture</span> on the Diagnostics screen. Your User ID is already blacked out. Paste it into your report.</p>
          <a v-if="links.discord" class="btn btn-ghost" :href="links.discord" rel="noopener"><span>Join the Discord</span></a>
        </div>
        <div class="card frame security">
          <h3>Found a security problem?</h3>
          <p>
            Please don't post it in public. Use GitHub's private reporting instead: the <span class="ui">Security</span> tab →
            <span class="ui">Report a vulnerability</span>. We reply within 7 days.
          </p>
          <a class="btn btn-ghost" :href="links.securityReport" rel="noopener"><span>Report privately</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
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
}
.btn {
  margin-top: 6px;
  width: max-content;
  max-width: 100%;
}
.security {
  grid-column: 1 / -1;
  border-color: color-mix(in srgb, var(--violet) 50%, var(--line));
}
.security::before,
.security::after {
  border-color: var(--violet);
}
</style>
