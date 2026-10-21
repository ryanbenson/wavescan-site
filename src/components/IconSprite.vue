<!-- Every icon on the site, drawn once. Use them with <AppIcon name="…" />. -->
<template>
  <svg width="0" height="0" style="position: absolute" aria-hidden="true">
    <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></symbol>
    <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" /></symbol>
    <symbol id="i-warn" viewBox="0 0 24 24"><path d="M12 3l10 18H2L12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /><path d="M12 10v5M12 18v.01" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" /></symbol>
    <symbol id="i-arrow" viewBox="0 0 56 24"><path d="M2 12h48M42 5l8 7-8 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>
    <symbol id="i-lang" viewBox="0 0 24 24"><path d="M4 5h9M8.5 3v2M6 5c.5 3 3 6 6 7.5M11 5c-.8 3.5-3.5 6.5-7 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /><path d="M13 21l4-9 4 9M14.4 18h5.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></symbol>
    <symbol id="i-screen" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.8" /><path d="M9 20h6M12 16v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /></symbol>
    <symbol id="i-hdr" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /><path d="M4 20L20 4" stroke="currentColor" stroke-width="1.8" /></symbol>
    <symbol id="i-bag" viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><path d="M9 8V6a3 3 0 016 0v2" fill="none" stroke="currentColor" stroke-width="1.8" /></symbol>
    <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /></symbol>
    <symbol id="i-moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /></symbol>
    <!-- The cube mark, centred on its bounding box. Its six pieces have their own ids so HeroMark can move them. -->
    <path id="mk-px1" d="M30.4 -73.5 L44.9 -73.5 L48.9 -62.5 L34.4 -62.5 Z" />
    <path id="mk-px2" d="M12.9 -60.5 L35.4 -60.5 L43.4 -42.5 L20.9 -42.5 Z" />
    <path id="mk-top" d="M-39.1 -64.5 L-1.6 -64.5 L12.4 -35.5 L-25.1 -35.5 Z" />
    <path id="mk-rgt" d="M17.4 -32.5 L62.9 -32.5 L78.4 2.5 L32.9 2.5 Z" />
    <path id="mk-bot" d="M-0.6 13.5 L72.9 13.5 L39.4 73.5 L-36.1 73.5 Z" />
    <path id="mk-lft" d="M-47.2 -54.5 L-14.2 6.7 L-47.2 65.5 L-78.4 6.7 Z" />
    <symbol id="i-logo" viewBox="-82 -82 164 164">
      <g fill="currentColor"><use href="#mk-lft" /><use href="#mk-bot" /><use href="#mk-top" /><use href="#mk-rgt" /><use href="#mk-px2" /><use href="#mk-px1" /></g>
    </symbol>
  </svg>
</template>
