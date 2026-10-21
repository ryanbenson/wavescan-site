<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
import BrandMark from "./BrandMark.vue";
import { useTheme } from "../theme";

const { theme, toggle } = useTheme();

const items = [
  { href: "#how", label: "How it works" },
  { href: "#wuthering-tools", label: "Wuthering Tools" },
  { href: "#safety", label: "Safety" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#help", label: "Help" },
  { href: "#faq", label: "FAQ" },
];
</script>

<template>
  <header class="nav">
    <div class="wrap">
      <BrandMark />
      <nav aria-label="Main">
        <ul>
          <li v-for="item in items" :key="item.href"><a :href="item.href">{{ item.label }}</a></li>
        </ul>
      </nav>
      <button class="theme-btn" type="button" :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'" @click="toggle">
        <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" />
      </button>
      <a class="btn btn-primary" href="#download"><span>Get Wavescan</span></a>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: env(safe-area-inset-top, 0px);
  z-index: 20;
  background: color-mix(in srgb, var(--bg) 86%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.wrap {
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 64px;
}
ul {
  list-style: none;
  display: flex;
  gap: 4px;
  margin: 0 0 0 auto;
  padding: 0;
  flex-wrap: wrap;
}
ul a {
  display: block;
  padding: 0.4rem 0.7rem;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.95rem;
}
ul a:hover {
  color: var(--fg);
}
.btn {
  min-height: 40px;
  font-size: 0.92rem;
}
.theme-btn {
  background: none;
  border: 1px solid var(--line);
  color: var(--muted);
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: var(--r-sm);
}
.theme-btn:hover {
  color: var(--fg);
  border-color: var(--muted);
}
@media (max-width: 920px) {
  nav {
    display: none;
  }
  .theme-btn {
    margin-left: auto;
  }
}
@media (max-width: 440px) {
  .wrap {
    gap: 12px;
  }
  .btn {
    padding: 0 1.3rem;
    font-size: 0.88rem;
  }
}
</style>
