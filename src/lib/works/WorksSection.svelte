<script>
  import { fade } from 'svelte/transition';
  import { ANIMATION_TIMING } from '../CONSTANTS';

  export let title;
  export let works;
</script>

<section>
  <h1
    class="creative-header creative-header__scrolled"
    id={title}
    in:fade={{ duration: ANIMATION_TIMING }}
  >
    {title}
  </h1>

  {#each works as work}
    <div class="single-work">
      <h2>{work}</h2>
    </div>
  {/each}
</section>

<style>
  section {
    margin-top: 15px;
    background: #000;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 150px;
  }
  .creative-header {
    position: relative;
    background-color: transparent;
    z-index: 2;
    color: #fff;
    font-weight: 700;
    font-size: 128px;
    letter-spacing: 0.11em;
  }
  .creative-header::before {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
    position: absolute;
    width: 100%;
    height: 18px;
    right: 8px;
    bottom: calc(-100% - 2px);
    z-index: -1;
  }
  .creative-header__scrolled::before {
    bottom: -2px;
    background: #e12d5d;
  }
  .single-work {
    width: 570px;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: white;
    color: black;
  }
</style>
