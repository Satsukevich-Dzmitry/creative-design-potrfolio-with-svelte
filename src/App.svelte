<script>
  import { Router, Route } from 'svelte-routing';
  import Header from './lib/Header/index.svelte';
  import Home from './pages/Home/Home.svelte';
  import About from './pages/About/About.svelte';
  import Contact from './pages/Contact/index.svelte';
  import Work from './pages/Work/index.svelte';
  import LoaderPage from './lib/LoaderPage/LoaderPage.svelte';

  let pageLoaded = false;
  const setPageLoaded = () => {
    pageLoaded = true;
  };
</script>

<Router>
  {#if !pageLoaded && window.location.pathname === '/'}
    <LoaderPage on:egg-clicked={setPageLoaded} />
  {:else}
    <Header />
    <main>
      <Route path="/"><Home /></Route>
      <Route path="About"><About /></Route>
      <Route path="Contact"><Contact /></Route>
      <Route path="Work"><Work /></Route>
    </main>
  {/if}
</Router>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video) {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  :global(html) {
    scroll-behavior: smooth;
  }
  /* HTML5 display-role reset for older browsers */
  :global(article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section) {
    display: block;
  }
  :global(body) {
    line-height: 1;
  }
  :global(ol, ul) {
    list-style: none;
  }
  :global(blockquote, q) {
    quotes: none;
  }
  :global(blockquote:before, blockquote:after, q:before, q:after) {
    content: '';
    content: none;
  }
  :global(table) {
    border-collapse: collapse;
    border-spacing: 0;
  }
  :global(body.modal-open) {
    height: 100vh;
    overflow-y: hidden;
  }

  main {
    background: black;
    min-height: 100vh;
    z-index: 3;
  }
</style>
