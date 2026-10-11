<!-- Faint resonance waves behind the hero. Still when the visitor prefers reduced motion. -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);
let frame = 0;
let width = 0;
let height = 0;
let onResize: (() => void) | null = null;

function resize(cv: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = cv.clientWidth;
  height = cv.clientHeight;
  cv.width = width * dpr;
  cv.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function draw(ctx: CanvasRenderingContext2D, t: number) {
  // Read the colours each frame so the waves follow a theme change.
  const style = getComputedStyle(document.documentElement);
  const colours = [style.getPropertyValue("--accent").trim(), style.getPropertyValue("--violet").trim()];
  ctx.clearRect(0, 0, width, height);
  for (let j = 0; j < 7; j++) {
    const amp = 14 + j * 7;
    const freq = 0.004 + j * 0.0007;
    const phase = t * 0.00025 * (1 + j * 0.15) + j;
    const base = height * 0.72 + j * 10;
    ctx.beginPath();
    for (let x = 0; x <= width; x += 6) {
      const envelope = Math.sin((Math.PI * x) / width);
      const y = base + Math.sin(x * freq + phase) * amp * envelope + Math.sin(x * freq * 2.3 - phase * 1.3) * amp * 0.35 * envelope;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = colours[j % 2] ?? "";
    ctx.globalAlpha = 0.08 + 0.05 * (j % 3);
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

onMounted(() => {
  const cv = canvas.value;
  const ctx = cv?.getContext("2d");
  if (!cv || !ctx) return;
  resize(cv, ctx);
  draw(ctx, 0);
  onResize = () => {
    resize(cv, ctx);
    draw(ctx, performance.now());
  };
  window.addEventListener("resize", onResize);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const loop = (t: number) => {
    draw(ctx, t);
    frame = requestAnimationFrame(loop);
  };
  frame = requestAnimationFrame(loop);
});

onUnmounted(() => {
  cancelAnimationFrame(frame);
  if (onResize) window.removeEventListener("resize", onResize);
});
</script>

<template>
  <canvas ref="canvas" aria-hidden="true"></canvas>
</template>

<style scoped>
canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.75;
}
</style>
