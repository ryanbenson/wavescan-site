<script setup lang="ts">
const facts = [
  { title: "Free, forever", detail: "Open source under GPL-3.0" },
  { title: "Windows & Mac", detail: "Windows 10/11 · macOS 13+ (Apple Silicon)" },
  { title: "Nothing to sign up for", detail: "No accounts, no ads, no tracking" },
  { title: "About 8 minutes", detail: "for a full bag of 3,000 echoes in auto mode" },
];
</script>

<template>
  <section class="facts" aria-label="Wavescan at a glance">
    <div class="wrap">
      <ul>
        <li v-for="f in facts" :key="f.title"><b>{{ f.title }}</b><span>{{ f.detail }}</span></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.facts {
  background: var(--bg-2);
  padding-block: var(--gap);
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--gap);
}
li {
  position: relative;
  padding: 20px 18px;
  background: var(--bg);
  border-radius: var(--r-sm);
  display: grid;
  gap: 4px;
}
li::after {
  content: "";
  position: absolute;
  right: 14px;
  top: 14px;
  width: 10px;
  height: 6px;
  background: var(--line);
  transform: skewX(var(--slant));
}
b {
  font-family: var(--display);
  font-weight: 600;
  font-size: 1.15rem;
}
span {
  color: var(--muted);
  font-size: 0.92rem;
}
@media (max-width: 820px) {
  ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 420px) {
  ul {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
