import { ref } from "vue";

type Theme = "light" | "dark";
const KEY = "ws-theme";

function current(): Theme {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "light" || set === "dark") return set;
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

/** The page is dark unless the system or the visitor picks light. index.html applies a saved choice before paint. */
export function useTheme() {
  const theme = ref<Theme>(current());

  function toggle() {
    theme.value = theme.value === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme.value);
    try {
      localStorage.setItem(KEY, theme.value);
    } catch {
      // Storage can be blocked; the choice then lasts until the page closes.
    }
  }

  return { theme, toggle };
}
