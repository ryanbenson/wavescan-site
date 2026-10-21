<!--
  The cube mark, drawn large and faint behind the hero's echo card. Its pieces drift in once when
  the page loads, like the scan putting an echo together, then it stays still. Still from the start
  when the visitor prefers reduced motion.
-->
<template>
  <svg class="hero-mark" viewBox="-82 -82 164 164" aria-hidden="true" focusable="false">
    <use href="#mk-lft" class="p" />
    <use href="#mk-bot" class="p" />
    <use href="#mk-top" class="p p4" />
    <use href="#mk-rgt" class="p p3" />
    <use href="#mk-px2" class="p p2" />
    <use href="#mk-px1" class="p p1" />
  </svg>
</template>

<style scoped>
.hero-mark {
  position: absolute;
  z-index: 0;
  width: min(640px, 62vw);
  aspect-ratio: 1;
  right: max(-120px, -8vw);
  top: 50%;
  translate: 0 -50%;
  fill: var(--surface);
  pointer-events: none;
}
@media (max-width: 900px) {
  .hero-mark {
    width: 120vw;
    right: -50vw;
    top: auto;
    bottom: -20vw;
    translate: none;
  }
}
.p {
  transform-box: fill-box;
  animation: gather 1.4s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.p1 {
  --dx: 90px;
  --dy: -70px;
  animation-delay: 0.35s;
}
.p2 {
  --dx: 60px;
  --dy: -46px;
  animation-delay: 0.25s;
}
.p3 {
  --dx: 34px;
  --dy: -24px;
  animation-delay: 0.15s;
}
.p4 {
  --dx: 20px;
  --dy: -12px;
  animation-delay: 0.1s;
}
@keyframes gather {
  from {
    transform: translate(var(--dx, 0), var(--dy, 0));
    opacity: 0.3;
  }
}
</style>
