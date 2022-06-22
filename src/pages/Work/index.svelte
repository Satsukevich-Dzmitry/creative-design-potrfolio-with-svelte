<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { link } from 'svelte-routing';
  import { ANIMATION_TIMING } from '../../lib/CONSTANTS';

  const selectOptions = {
    UiUX: 'UI/UX',
    Posters: 'Posters',
    Logos: 'Logos',
  };

  let topHeader, topOffset, scrolledToBottom;

  let hoveredOption = null;

  const onOptionHover = (name) => {
    hoveredOption = name;
  };

  const onOptionLeave = () => {
    hoveredOption = null;
  };

  onMount(() => {
    window.addEventListener(
      'scrolled-to-bottom',
      () => {
        scrolledToBottom = true;
      },
      {
        once: true,
      }
    );
  });

  onMount(() => {
    topOffset = `${topHeader.offsetHeight + 22}px`;
  });
</script>

<div class="main-page">
  <img
    class="main-page_image"
    class:main-page_image__show={hoveredOption === null}
    src="images/work-eggs.png"
    alt=""
  />
  <img
    class="main-page_image"
    class:main-page_image__show={hoveredOption === selectOptions.UiUX}
    src="images/work-eggs_1.png"
    alt=""
  />
  <img
    class="main-page_image"
    class:main-page_image__show={hoveredOption === selectOptions.Logos}
    src="images/work-eggs_2.png"
    alt=""
  />
  <img
    class="main-page_image"
    class:main-page_image__show={hoveredOption === selectOptions.Posters}
    src="images/work-eggs_3.png"
    alt=""
  />
  <section
    class="content-section"
    style="margin-top: calc(100vh - {topOffset})"
  >
    <div class="headers-container">
      <h1
        class={`creative-header ${
          scrolledToBottom ? 'creative-header__scrolled' : ''
        }`}
        bind:this={topHeader}
        in:fade={{ duration: ANIMATION_TIMING }}
      >
        WORK
      </h1>
    </div>
    <nav class="main-menu">
      <a
        on:mouseenter={() => {
          onOptionHover(selectOptions.UiUX);
        }}
        on:mouseleave={onOptionLeave}
        class="main-menu_item"
        href="Work"
        use:link
      >
        UX/UI
      </a>
      <a
        on:mouseenter={() => {
          onOptionHover(selectOptions.Posters);
        }}
        on:mouseleave={onOptionLeave}
        class="main-menu_item"
        href="Work"
        use:link
      >
        POSTERS
      </a>
      <a
        on:mouseenter={() => {
          onOptionHover(selectOptions.Logos);
        }}
        on:mouseleave={onOptionLeave}
        class="main-menu_item"
        href="Work"
        use:link
      >
        LOGOS
      </a>
    </nav>
  </section>
</div>

<style>
  .creative-header {
    position: relative;
    background-color: transparent;
    z-index: 2;
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
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .main-page_image__show {
    opacity: 1;
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
    box-shadow: 0px -100px 29px -10px rgb(0 0 0 / 60%) inset,
      0px 35px 0px 0px rgb(0 0 0 / 60%);
    width: 100%;
  }
  .creative-header {
    color: #fff;
    font-weight: 700;
    font-size: 128px;
    letter-spacing: 0.11em;
  }
  .main-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 1039px;
    min-height: 150px;
    background: rgba(0, 0, 0, 0.8);
  }
  .main-menu_item {
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
  .main-menu_item:nth-child(3) {
    border-right: 3px solid rgba(225, 45, 93, 0.5);
  }
  .main-menu_item:hover {
    background: rgba(225, 45, 93, 0.2);
  }
</style>
