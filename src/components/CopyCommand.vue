<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ label: string; command: string }>();
const code = ref<HTMLElement | null>(null);
const state = ref<"idle" | "copied" | "selected">("idle");
let reset = 0;

function selectText() {
  const el = code.value;
  const sel = window.getSelection();
  if (!el || !sel) return;
  const range = document.createRange();
  range.selectNodeContents(el);
  sel.removeAllRanges();
  sel.addRange(range);
  state.value = "selected";
}

async function copy() {
  try {
    await navigator.clipboard.writeText(props.command);
    state.value = "copied";
  } catch {
    // Clipboard can be refused; selecting the text lets the visitor copy it by hand.
    selectText();
  }
  clearTimeout(reset);
  reset = window.setTimeout(() => (state.value = "idle"), 1800);
}
</script>

<template>
  <div class="cmd">
    <span class="os">{{ label }}</span>
    <code ref="code">{{ command }}</code>
    <button type="button" :aria-label="`Copy the ${label} command`" @click="copy">
      {{ state === "copied" ? "Copied" : state === "selected" ? "Selected" : "Copy" }}
    </button>
  </div>
</template>

<style scoped>
.cmd {
  display: flex;
  align-items: stretch;
  border: 1px solid var(--line);
  background: var(--bg-2);
  margin-top: 10px;
}
.os {
  font: 600 0.72rem var(--mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 0.75rem;
  border-right: 1px solid var(--line);
  display: grid;
  place-items: center;
  min-width: 86px;
}
code {
  flex: 1;
  min-width: 0;
  padding: 0.75rem;
  overflow-x: auto;
  white-space: nowrap;
  color: var(--fg);
}
button {
  background: none;
  border: 0;
  border-left: 1px solid var(--line);
  color: var(--accent);
  padding: 0 0.9rem;
  cursor: pointer;
  font: 600 0.8rem var(--display);
  min-width: 76px;
}
button:hover {
  background: var(--accent-soft);
}
</style>
