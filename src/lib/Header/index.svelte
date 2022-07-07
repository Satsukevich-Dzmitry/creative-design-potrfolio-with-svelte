<script>
  import Scroll from './scroll.svelte';
  import Menu from './menu.svelte';
</script>

<header>
  <Scroll />
  <Menu />
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    pointer-events: none;
    top: 18px;
    width: 100%;
    background: transparent;
    z-index: 4;
  }
</style>
