<script setup lang="ts">
import EchoPanel from "../components/EchoPanel.vue";
import HeroMark from "../components/HeroMark.vue";
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <HeroMark />
    <div class="wrap">
      <div>
        <span class="tag status"><i></i>Out now · v0.1 for Windows and Mac</span>
        <h1 id="hero-title">Scan your echoes.<em>Skip the typing.</em></h1>
        <p class="lede">
          Wavescan is a free app for Windows and Mac. It reads the echoes in your Wuthering Waves bag and sends them to Wuthering Tools in one click. No more typing
          in substats one by one.
        </p>
        <div class="cta-row">
          <a class="btn btn-primary" href="#download"><span>Get Wavescan</span></a>
          <a class="btn btn-ghost" href="#how"><span>See how it works</span></a>
        </div>
        <p class="hero-note">Free and open source. No account. Your scan stays on your computer.</p>
      </div>
      <EchoPanel />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(40px, 7vw, 88px) clamp(48px, 7vw, 96px);
}
.wrap {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
}
@media (max-width: 900px) {
  .wrap {
    grid-template-columns: minmax(0, 1fr);
  }
}
.status {
  color: var(--gold);
  font-size: 0.8rem;
  padding-block: 0.25rem;
  max-width: 100%;
  white-space: normal;
}
.status::before {
  background: color-mix(in srgb, var(--gold) 12%, transparent);
}
.status i {
  width: 10px;
  height: 7px;
  flex: none;
  background: currentColor;
  transform: skewX(var(--slant));
}
h1 {
  font-size: var(--step-4);
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-top: 18px;
}
h1 em {
  font-style: normal;
  color: var(--gold);
  display: block;
}
.lede {
  margin-top: 20px;
}
.cta-row {
  margin-top: 30px;
}
.hero-note {
  margin-top: 16px;
  font-size: var(--step--1);
  color: var(--muted);
}
</style>
