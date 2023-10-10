<script>
  import Button from '../../../Common/Button.svelte';
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { blur, greyscale, sepia, hueRotate } from '../code-examples';
  import Range from '../../../Common/Range.svelte';

  export let styleId;

  let posY = 50;
  let posX = 50;

  const filters = [
    { name: 'Blur', code: blur },
    { name: 'Greyscale', code: greyscale },
    { name: 'Sepia', code: sepia },
    { name: 'Hue Rotate', code: hueRotate },
  ];

  let selectedCode = '';
  const select = (code) => () => {
    selectedCode = code;
  };
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 2rem 2fr;
    grid-template-areas:
      'bg . code'
      'bg . controls';
  }

  .bg {
    grid-area: bg;
    position: relative;
  }

  .img-filter-box {
    z-index: 3;
  }

  .bg,
  img {
    width: 100%;
    height: auto;
  }

  .code {
    grid-area: code;
  }

  .controls {
    grid-area: controls;
  }
</style>

<div class="container">
  <div class="bg">
    <img
      width="1000"
      height="667"
      src="/images/chris-lejarazu-08wxrVv5rp8-unsplash.jpg"
      alt=""
    />
    <div class="img-filter-box" style="--y: {posY}%; --x: {posX}%;"></div>
  </div>

  <div class="code">
    <CodeBlock {styleId} questionMark height="400px" code="{selectedCode}" />
  </div>

  <div class="controls">
    {#each filters as { name, code }}
      <Button active="{code === selectedCode}" onClickHandler="{select(code)}">
        {name}
      </Button>
    {/each}

    <Range
      title="Y"
      rotated="{false}"
      min="{0}"
      max="{100}"
      value="{50}"
      on:change="{(e) => (posY = e.detail.value)}"
    />

    <Range
      title="X"
      rotated="{false}"
      min="{0}"
      max="{100}"
      value="{50}"
      on:change="{(e) => (posX = e.detail.value)}"
    />
  </div>
</div>
