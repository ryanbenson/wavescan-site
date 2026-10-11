<template>
  <section id="faq" class="section" aria-labelledby="faq-title">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Questions</span>
        <h2 id="faq-title">Frequently asked</h2>
      </div>
      <div class="qa faq">
        <details>
          <summary>Is Wavescan free?</summary>
          <div class="ans"><p>Yes. It's free and open source under the GPL-3.0 licence. There are no ads and nothing to buy.</p></div>
        </details>
        <details>
          <summary>Can I get banned for using it?</summary>
          <div class="ans">
            <p>Watch mode only looks at the game window, like a screen recorder. It never touches the game's memory or files and sends no input.</p>
            <p>
              Auto mode sends mouse clicks, which Kuro's Fair Play Policy may count as a macro. We don't know of any bans, but there is some risk.
              <a href="#how">Read more in How it works</a>.
            </p>
          </div>
        </details>
        <details>
          <summary>Does it work on phone, PlayStation or Steam Deck?</summary>
          <div class="ans"><p>No. Wavescan only works on Windows PCs and Macs with an Apple chip. Linux and Steam Deck aren't planned right now.</p></div>
        </details>
        <details>
          <summary>My game isn't in English. Can I still use it?</summary>
          <div class="ans">
            <p>Not yet. Switch the game's text language to English while you scan, then switch it back. More languages are on the <a href="#roadmap">roadmap</a>.</p>
          </div>
        </details>
        <details>
          <summary>Does it scan my characters and weapons?</summary>
          <div class="ans"><p>Not yet. Version 0.1 reads echoes. Characters come in v0.2 and weapons in v0.3.</p></div>
        </details>
        <details>
          <summary>A new echo came out. Will Wavescan know it?</summary>
          <div class="ans">
            <p>For now, new echoes arrive with Wavescan updates. If your copy doesn't know an echo yet, it leaves that echo out and tells you how many it skipped. It never guesses.</p>
            <p>We're planning for Wavescan to download the newest echo list by itself, so you won't need a new version after every game update.</p>
          </div>
        </details>
        <details>
          <summary>Is this made by Kuro Games?</summary>
          <div class="ans"><p>No. Wavescan is a fan project made by players. It isn't connected to or approved by Kuro Games.</p></div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  max-width: 820px;
}
</style>
