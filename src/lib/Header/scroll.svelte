<script>
  import { fade, scale } from 'svelte/transition';
  import { ANIMATION_TIMING } from '../CONSTANTS';
  let scrolledToBottom = false;
  let scrollY = 0;
  let innerHeight = 0;

  $: if (innerHeight + scrollY >= document.body.offsetHeight) {
    scrolledToBottom = true;
  } else {
    scrolledToBottom = false;
  }
</script>

<div class="scroll">
  {#if scrolledToBottom}
    <span class="mary-title-M" in:fade={{ duration: ANIMATION_TIMING }}>
      M
    </span>
  {:else}
    <div class="mary-title-full" in:fade={{ duration: ANIMATION_TIMING }}>
      <span>MORDAS</span>
      <span class="mary-title-full__second-span">DESIGN</span>
    </div>
  {/if}
  <div class="scroll-progress" in:scale={{ duration: ANIMATION_TIMING }} />
  {#if scrolledToBottom}
    <div class="scroll-bottom-cta" in:fade={{ duration: ANIMATION_TIMING }}>
      <img src="/images/scroll-finish.svg" alt="" />
    </div>
  {:else}
    <div
      class="scroll-bottom-cta scroll-text"
      in:fade={{ duration: ANIMATION_TIMING }}
    >
      SCROLL
    </div>
  {/if}
</div>

<svelte:window bind:scrollY bind:innerHeight />

<style>
  .scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 37px;
    gap: 8px;
    width: 122px;
  }
  .mary-title-M {
    font-weight: 700;
    font-size: 90px;
    line-height: 94px;
    color: #e12d5d;
    text-shadow: -3px 0px 0px #ffffff;
  }
  .mary-title-full {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #e12d5d;
  }
  .mary-title-full__second-span {
    color: #979797;
    letter-spacing: 0.09em;
  }
  .scroll-progress {
    width: 0;
    border: 1px solid #979797;
    height: 336px;
    position: relative;
  }
  .scroll-text {
    color: #e12d5d;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.022em;
  }
  .scroll-bottom-cta {
    padding-top: 20px;
  }
  .scroll-progress::after {
    content: url('/images/scroll-arrow.svg');
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
  }
</style>
