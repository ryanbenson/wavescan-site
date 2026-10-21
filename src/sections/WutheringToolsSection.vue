<script setup lang="ts">
import AppIcon from "../components/AppIcon.vue";
import { links } from "../links";

const nodes = [
  { where: "In the game", title: "Bag → Echoes", text: "You open your echoes, like you always do.", main: false },
  { where: "On your computer", title: "Wavescan", text: "Reads each echo, set, level and who has it equipped. You check anything it wasn't sure about.", main: true },
  { where: "In your browser", title: "Wuthering Tools", text: "Shows you what's new and spots duplicates before anything is saved.", main: false },
];
</script>

<template>
  <section id="wuthering-tools" class="section" aria-labelledby="wt-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Works with Wuthering Tools</span>
        <h2 id="wt-title">From your bag to your builds</h2>
        <p class="lede">
          Wavescan was made to fill your <a :href="links.wutheringTools" rel="noopener">Wuthering Tools</a> echo inventory, so you can plan builds with the echoes you
          really have.
        </p>
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

      <div class="points">
        <div>
          <h3>One click to import</h3>
          <p>Copy your scan, open the Wuthering Tools import page and press <span class="ui">Paste from scanner</span>. Saving a file you can drag in is coming soon.</p>
        </div>
        <div>
          <h3>You stay in control</h3>
          <p>Wuthering Tools only adds echoes. It never wipes your inventory. Echoes below +25 are skipped unless you choose to include them.</p>
        </div>
        <div>
          <h3>Same reader, both sides</h3>
          <p>Wavescan uses the same echo-reading code as Wuthering Tools, so stats and names match. New echoes reach Wavescan through regular updates.</p>
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
