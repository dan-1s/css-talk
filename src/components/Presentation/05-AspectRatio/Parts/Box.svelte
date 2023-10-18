<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { aspectRatioBox, htmlBoxes } from '../code-examples';
  import Range from '../../../Common/Range.svelte';

  export let styleId;

  let htmlCode = htmlBoxes;
  let colEnd = 3;

  function createBlock({ detail }) {
    htmlCode = detail.value;
  }
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
  }

  .many-grids {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: auto;
  }

  .code {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: auto;
  }

  .container :global(.box) {
    background: var(--primary-color-40);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    grid-row: 2 / 3;
  }
</style>

<div class="container" style:--col-end="{colEnd}">
  <div class="code">
    <CodeBlock {styleId} height="400px" code="{aspectRatioBox}" />

    <CodeBlock
      injectStyle="{false}"
      on:change="{createBlock}"
      height="400px"
      code="{htmlBoxes}"
    />
  </div>

  <Range
    title="--col-end"
    rotated="{false}"
    min="{3}"
    max="{25}"
    value="{colEnd}"
    on:change="{(e) => (colEnd = e.detail.value)}"
  />

  <div class="many-grids">
    {@html htmlCode}
  </div>
</div>
