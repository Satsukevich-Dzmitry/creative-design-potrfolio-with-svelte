<script>
  let menuOpened = false;
  import { link } from 'svelte-routing';
  import { scale } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  import { ANIMATION_TIMING } from '../CONSTANTS';
  import { clickOnLink } from '../../events/linkClick/index';

  const toggleMenu = () => {
    menuOpened = !menuOpened;
    document.body.classList.toggle('modal-open');
  };

  function scaleMenuItem(node, { duration, delay, out }) {
    if (out) {
      node.classList.remove('site-link-background');
    } else {
      setTimeout(() => {
        node.classList.add('site-link-background');
      }, delay + duration);
    }

    return {
      duration,
      delay,
      css: (t) => {
        const linearTiming = linear(t);

        return `transform: scaleY(${linearTiming});`;
      },
    };
  }
</script>

<nav class="navigation-bar" aria-label="header navigation">
  <button
    type="button"
    class={menuOpened
      ? 'navigation-bar_menu-button navigation-bar_menu-button__active'
      : 'navigation-bar_menu-button'}
    aria-expanded={menuOpened}
    on:click={toggleMenu}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="31px"
      height="18px"
      class="svg-menu"
    >
      <path
        fill-rule="evenodd"
        fill="rgb(255, 255, 255)"
        d="M-0.000,-0.000 L31.000,-0.000 L31.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"
      />
      <path
        fill-rule="evenodd"
        fill="rgb(255, 255, 255)"
        d="M-0.000,7.000 L31.000,7.000 L31.000,9.000 L-0.000,9.000 L-0.000,7.000 Z"
      />
      <path
        fill-rule="evenodd"
        fill="rgb(255, 255, 255)"
        d="M-0.000,14.000 L31.000,14.000 L31.000,16.000 L-0.000,16.000 L-0.000,14.000 Z"
      />
    </svg>
  </button>
  {#if menuOpened}
    <section
      class="site-menu"
      in:scale={{ duration: ANIMATION_TIMING }}
      out:scale={{ duration: ANIMATION_TIMING, delay: ANIMATION_TIMING }}
      use:clickOnLink
      on:link-clicked={toggleMenu}
    >
      <a
        href="Work"
        use:link
        in:scaleMenuItem={{
          duration: ANIMATION_TIMING,
          delay: ANIMATION_TIMING,
          out: false,
        }}
        out:scaleMenuItem={{
          duration: ANIMATION_TIMING,
          delay: 0,
          out: true,
        }}><span>Work</span></a
      >
      <a
        href="About"
        use:link
        in:scaleMenuItem={{
          duration: ANIMATION_TIMING,
          delay: ANIMATION_TIMING,
          out: false,
        }}
        out:scaleMenuItem={{
          duration: ANIMATION_TIMING,
          delay: 0,
          out: true,
        }}
      >
        <span>ABOUT</span>
      </a>
      <a
        href="Contact"
        use:link
        in:scaleMenuItem={{
          duration: ANIMATION_TIMING,
          delay: ANIMATION_TIMING,
          out: false,
        }}
        out:scaleMenuItem={{
          duration: ANIMATION_TIMING,
          delay: 0,
          out: true,
        }}
      >
        <span>CONTACT</span>
      </a>
    </section>
  {/if}
</nav>

<style>
  * {
    pointer-events: auto;
  }
  .site-menu {
    z-index: 8;
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100vw - 354px);
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    transform-origin: calc(100% - 32px) 42px;
    background-color: #e12d5d;
  }
  .site-menu a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: 4px 9px 10px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    font-size: 96px;
    letter-spacing: 0.11em;
    font-weight: 700;
    background-position: center -460%;
  }
  .site-menu a span {
    position: relative;
    background-color: transparent;
    z-index: 2;
  }
  .site-menu a span::before {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
    position: absolute;
    width: 100%;
    height: 12px;
    right: calc(100% + 8px);
    bottom: -2px;
    z-index: -1;
  }
  .site-menu a:hover span::before {
    right: 8px;
  }
  .site-menu a:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    background-color: #e12d5d;
    font-size: 128px;
    color: #ffffff;
    transform-origin: center top;
  }

  :global(.site-link-background) {
    background-repeat: no-repeat;
    background-position: center -460%;
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  :global(.site-menu .site-link-background:nth-child(1):hover) {
    background-image: url('/images/menu-work-background.png');
    background-position: center 0%;
  }
  .site-menu a:nth-child(1):hover span::before {
    background: #979797;
  }
  .site-menu a:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    background-color: #525252;
    color: #ff9fb9;
    transform-origin: center bottom;
  }
  .site-menu a:nth-child(2):hover span::before {
    background: #e12d5d;
  }
  .site-menu a:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background-color: #ffffff;
    color: #e12d5d;
    transform-origin: center bottom;
  }
  .site-menu a:nth-child(3):hover span::before {
    background: #525252;
  }
  .navigation-bar_menu-button {
    position: fixed;
    top: 42px;
    right: 32px;
    width: 113px;
    height: 97px;
    border: none;
    background: url('/images/ellipse-button.svg') no-repeat;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .navigation-bar_menu-button:hover {
    cursor: pointer;
  }
  .svg-menu {
    flex-shrink: 0;
  }
  path {
    transition: all 0.7s;
  }
  path:nth-of-type(1) {
    transform-origin: 2px 3px;
  }
  path:nth-of-type(3) {
    transform-origin: 4px 15px;
  }
  .navigation-bar_menu-button__active path:nth-of-type(1) {
    transform: rotate(45deg);
  }
  .navigation-bar_menu-button__active path:nth-of-type(2) {
    transform: translateX(-10px);
    opacity: 0;
  }
  .navigation-bar_menu-button__active path:nth-of-type(3) {
    transform: rotate(-45deg);
  }
</style>
