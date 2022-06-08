<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import Jelly from 'jelly.js';

  const dispatch = createEventDispatcher();

  let jelly,
    hoverIndex = -1,
    jellyContainer;

  function eggClick() {
    if (hoverIndex >= 0) {
      dispatch('egg-clicked');
    }
  }

  const options = {
    paths: '#egg-path', // Shape we want to draw
    pointsNumber: 12, // Number of points
    maxDistance: 25, // Max distance among points
    color: '#00000',
    mouseIncidence: 65,
    maxIncidence: 65, // Mouse incidence
    centroid: '.centroid-text',
    image: 'images/loader-chicken.png',
    // imageCentroid: false,
    intensity: 0.96,
    fastness: 1 / 16, // Element to move accordingly with the centroid of the shape
    debug: true, // Uncomment this to see the points
  };

  onMount(() => {
    jelly = new Jelly('.jelly-canvas', options);
    console.log(jelly);
    function checkHover() {
      // The `getHoverIndex` function will return the index of the shape being hovered, or -1
      hoverIndex = jelly.getHoverIndex();
      jellyContainer.style.cursor = hoverIndex === -1 ? 'default' : 'pointer';
      window.requestAnimationFrame(checkHover);
    }
    window.requestAnimationFrame(checkHover);
  });
</script>

<div class="outer-loader">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="1024"
    height="1024"
    style="display: none"
  >
    <path
      id="egg-path"
      d="m512,893.49998c-160.77349,0 -324.00001,-80.72652 -285.00001,-288.5c39,-207.77348 124.22652,-474.5 285.00001,-474.5c160.77349,0 244.00001,246.72652 273.00001,442.5c29,195.77348 -112.22652,320.5 -273.00001,320.5z"
    />
  </svg>

  <div class="jelly-container" on:click={eggClick} bind:this={jellyContainer}>
    <canvas class="jelly-canvas" />
  </div>
</div>

<style>
  .outer-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--pink-color);
    color: white;
    box-shadow: inset -14px 2px 50px #830023;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* Jelly styles */

  .jelly-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .jelly-container,
  .jelly-canvas {
    width: 1024px;
    height: 1024px;
  }
</style>
