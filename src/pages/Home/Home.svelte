<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Link } from 'svelte-routing';
  import { ANIMATION_TIMING } from '../../lib/CONSTANTS';

  let topHeader, topOffset;

  onMount(() => {
    topOffset = `${topHeader.offsetHeight + 22}px`;
  });
</script>

<div class="main-page">
  <img class="main-page_image" src="images/main-chicken.png" alt="" />
  <section
    class="content-section"
    style="margin-top: calc(100vh - {topOffset})"
  >
    <div class="headers-container">
      <h1
        class="creative-header"
        bind:this={topHeader}
        in:fade={{ duration: ANIMATION_TIMING }}
      >
        CREATIVE
      </h1>
      <h2 class="designer-header">DESIGNER</h2>
    </div>
    <nav class="main-menu">
      <Link class="main-menu_item" to="/">WORK</Link>
      <Link class="main-menu_item" to="About">ABOUT</Link>
      <Link class="main-menu_item" to="About">CONTACT</Link>
    </nav>
  </section>
</div>

<style>
  .main-page {
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000;
  }
  .main-page_image {
    position: fixed;
    top: -78px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    aspect-ratio: 1;
  }
  .content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    gap: 35px;
  }
  .headers-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 35px 0px 0px rgb(0 0 0 / 80%),
      inset 0px -120px 50px 75px rgb(0 0 0 / 80%);
    width: 100%;
  }
  .creative-header {
    color: #fff;
    font-weight: 700;
    font-size: 128px;
    letter-spacing: 0.11em;
  }
  .designer-header {
    font-style: normal;
    font-weight: 700;
    font-size: 128px;
    letter-spacing: 0.11em;
    color: #e12d5d;
  }
  .main-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 1039px;
    min-height: 150px;
    background: rgba(0, 0, 0, 0.8);
  }
  :global(.main-menu_item) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    letter-spacing: 0.022em;
    color: #e12d5d;
    border-top: 3px solid rgba(225, 45, 93, 0.5);
    border-bottom: 3px solid rgba(225, 45, 93, 0.5);
    border-left: 3px solid rgba(225, 45, 93, 0.5);
    text-decoration: none;
  }
  :global(.main-menu_item:nth-child(3)) {
    border-right: 3px solid rgba(225, 45, 93, 0.5);
  }
  :global(.main-menu_item:hover) {
    background: rgba(225, 45, 93, 0.2);
  }
</style>
