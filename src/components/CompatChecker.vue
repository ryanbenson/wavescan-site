<script setup lang="ts">
import { computed, reactive } from "vue";
import AppIcon, { type IconName } from "./AppIcon.vue";
import { checkSetup, hdrOptions, languageOptions, platformOptions, screenOptions, type Setup, type Status } from "../compat";

const setup = reactive<Setup>({ platform: "win11", screen: "16:9", language: "en", hdr: "off" });
const verdict = computed(() => checkSetup(setup));

const look: Record<Status, { icon: IconName; cls: string }> = {
  ok: { icon: "check", cls: "ok" },
  fix: { icon: "warn", cls: "warn" },
  no: { icon: "x", cls: "no" },
};
</script>

<template>
  <div class="checker frame">
    <h3>Quick check</h3>
    <p class="muted intro">Pick your setup and we'll tell you if Wavescan will work.</p>
    <form @submit.prevent>
      <div class="field">
        <label for="c-platform">Where do you play?</label>
        <select id="c-platform" v-model="setup.platform">
          <option v-for="o in platformOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="c-screen">Game screen shape</label>
        <select id="c-screen" v-model="setup.screen">
          <option v-for="o in screenOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="c-language">Game text language</label>
        <select id="c-language" v-model="setup.language">
          <option v-for="o in languageOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="c-hdr">HDR in the game</label>
        <select id="c-hdr" v-model="setup.hdr">
          <option v-for="o in hdrOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
    </form>
    <div class="verdict" aria-live="polite">
      <div class="title" :class="look[verdict.status].cls"><AppIcon :name="look[verdict.status].icon" /><span>{{ verdict.title }}</span></div>
      <ul>
        <li v-for="line in verdict.lines" :key="line.text">
          <AppIcon :name="look[line.status].icon" :class="look[line.status].cls" /><span>{{ line.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.checker {
  padding: 24px;
}
.intro {
  font-size: 0.95rem;
  margin-top: 4px;
}
form {
  display: grid;
  gap: 14px;
  margin-top: 16px;
}
.field {
  display: grid;
  gap: 6px;
}
label {
  font-size: 0.9rem;
  font-weight: 700;
}
select {
  font: inherit;
  font-size: 0.98rem;
  color: var(--fg);
  background: var(--surface-2);
  border: 1px solid var(--line);
  padding: 0.6rem 0.7rem;
  width: 100%;
  border-radius: 0;
}
.verdict {
  margin-top: 18px;
  border-top: 1px solid var(--line);
  padding-top: 16px;
  display: grid;
  gap: 10px;
}
.title {
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.15rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
  font-size: 0.95rem;
}
li {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  gap: 8px;
}
li svg {
  margin-top: 3px;
}
</style>
