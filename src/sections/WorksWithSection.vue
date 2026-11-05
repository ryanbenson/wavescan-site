<script setup lang="ts">
import AppIcon from "../components/AppIcon.vue";
import { importApps } from "../apps";
import { links } from "../links";

const nodes = [
  { where: "In the game", title: "Bag → Echoes", text: "You open your echoes, like you always do.", main: false },
  { where: "On your computer", title: "Wavescan", text: "Reads each echo, set, level and who has it equipped. You check anything it wasn't sure about.", main: true },
  { where: "In your browser", title: "Your echo app", text: "Paste the scan into Wuthering Tools, Tacet Lab or another app that takes it.", main: false },
];
</script>

<template>
  <section id="works-with" class="section" aria-labelledby="wt-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Works with</span>
        <h2 id="wt-title">From your bag to your builds</h2>
        <p class="lede">One scan works in every app on this list, so you can plan builds with the echoes you really have, wherever you plan them.</p>
      </div>

      <ol class="flow">
        <template v-for="(n, i) in nodes" :key="n.title">
          <li v-if="i > 0" class="link" aria-hidden="true"><AppIcon name="arrow" :width="56" :size="24" /></li>
          <li class="node panel" :class="{ lead: n.main }">
            <span class="where">{{ n.where }}</span>
            <h3>{{ n.title }}</h3>
            <p>{{ n.text }}</p>
          </li>
        </template>
      </ol>

      <ul class="apps">
        <li v-for="a in importApps" :key="a.name" class="app card panel">
          <h3>
            {{ a.name }}<span class="tag" :class="a.ready ? 'ready' : 'soon'">{{ a.ready ? "Works now" : "Coming soon" }}</span>
          </h3>
          <p>{{ a.about }}</p>
          <p>{{ a.how }}</p>
          <a class="btn btn-ghost" :href="a.href" rel="noopener"><span>Go to {{ a.name }}</span></a>
        </li>
      </ul>

      <div class="points">
        <div>
          <h3>One scan, every app</h3>
          <p>Each app takes the same scan. Copy it once in Wavescan and paste it wherever you like.</p>
        </div>
        <div>
          <h3>You choose where it goes</h3>
          <p>Wavescan never sends your scan anywhere. It only goes to an app when you paste it there.</p>
        </div>
        <div>
          <h3>Making a Wuthering Waves app?</h3>
          <p>You can take Wavescan scans too, with no changes on our side. <a :href="links.issues" rel="noopener">Open an issue on GitHub</a> and we'll add you here.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flow {
  list-style: none;
  margin: 0 0 40px;
  padding: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 56px minmax(0, 1fr) 56px minmax(0, 1fr);
  align-items: stretch;
}
.node {
  padding: 20px;
  display: grid;
  gap: 8px;
  align-content: start;
}
.where {
  font: 600 0.75rem var(--mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}
.node h3 {
  font-size: 1.2rem;
}
.node p {
  color: var(--muted);
  font-size: 0.94rem;
}
.link {
  display: grid;
  place-items: center;
  color: var(--gold);
}
@media (max-width: 820px) {
  .flow {
    grid-template-columns: minmax(0, 1fr);
  }
  .link {
    height: 48px;
  }
  .link svg {
    transform: rotate(90deg);
  }
}
.apps {
  list-style: none;
  margin: 0 0 40px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: var(--gap);
}
.app {
  display: grid;
  gap: 8px;
  align-content: start;
}
.app h3 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 12px;
  font-size: 1.2rem;
}
.app .btn {
  margin-top: 6px;
  width: max-content;
  max-width: 100%;
}
.ready {
  color: var(--ok);
}
.soon {
  color: var(--check);
}
.points {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}
@media (max-width: 820px) {
  .points {
    grid-template-columns: minmax(0, 1fr);
  }
}
.points h3 {
  font-size: 1.05rem;
  margin-bottom: 6px;
}
.points p {
  color: var(--muted);
  font-size: 0.96rem;
}
</style>
