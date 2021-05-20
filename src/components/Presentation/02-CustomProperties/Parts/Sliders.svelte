<script>
  import { onMount } from 'svelte';
  import { hue, saturation, light } from '../store';

  const clearRootProperties = (root) => () => {
    ['--hue', '--satMod', '--lightMod'].forEach((prop) =>
      root.style.removeProperty(prop)
    );
  };

  let root;
  onMount(() => {
    root = document.documentElement;
    return clearRootProperties(root);
  });

  $: root && root.style.setProperty('--hue', $hue);
  $: root && root.style.setProperty('--satMod', $saturation / 1000);
  $: root && root.style.setProperty('--lightMod', $light / 1000);
</script>

<style>
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .sliders {
    display: flex;
    flex-wrap: wrap;
  }

  input[type='range'] {
    transform: rotateZ(270deg);
    height: 200px;
  }

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  p {
    color: hsl(
      var(--hue),
      calc(50% * var(--satMod)),
      calc(100% * var(--lightMod))
    );
  }

  .rings {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    width: 45vw;
    height: 45vw;
    max-width: 500px;
    max-height: 500px;
  }

  .ring {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.5;
  }

  .ring:nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
    background: hsl(
      var(--hue),
      calc(50% * var(--satMod)),
      calc(100% * var(--lightMod))
    );
  }

  .ring:nth-child(2) {
    grid-column: 3 / 5;
    grid-row: 1 / 3;
    background: hsl(
      calc(var(--hue) - 50),
      calc(50% * var(--satMod)),
      calc(100% * var(--lightMod))
    );
  }

  .ring:nth-child(3) {
    grid-column: 2 / 5;
    grid-row: 2 / 5;
    background: hsl(
      calc(var(--hue) + 50),
      calc(50% * var(--satMod)),
      calc(100% * var(--lightMod))
    );
  }

  .ring:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 3 / 5;
    background: hsl(
      calc(var(--hue) - 100),
      calc(50% * var(--satMod)),
      calc(100% * var(--lightMod))
    );
  }
</style>

<div class="container">
  <div class="sliders">
    <div class="slide">
      <label for="hue">Hue ({$hue})</label>
      <input id="hue" type="range" min="0" max="360" bind:value="{$hue}" />
    </div>

    <div class="slide">
      <label for="saturation">Saturation ({$saturation / 1000})</label>
      <input
        id="saturation"
        type="range"
        min="1"
        max="3000"
        bind:value="{$saturation}"
      />
    </div>

    <div class="slide">
      <label for="light">Lightness ({$light / 1000})</label>
      <input id="light" type="range" min="1" max="1000" bind:value="{$light}" />
    </div>
  </div>

  <div class="result">
    <p class="md">Can you see me?</p>

    <div class="rings">
      {#each [1, 2, 3, 4] as _}
        <span class="ring"></span>
      {/each}
    </div>
  </div>
</div>
