<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import Range from '../../../Common/Range.svelte';
  import { maskImage } from '../code-examples';

  export let styleId;

  let posY = 50;
  let posX = 50;
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 3fr 2rem 3fr;
    grid-template-areas:
      'bg . code'
      'bg . controls';
  }

  .bg {
    grid-area: bg;
    position: relative;
  }

  .code {
    grid-area: code;
  }

  .controls {
    grid-area: controls;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  img,
  .bg {
    width: 100%;
  }

  .mask-thumb {
    width: 80px;
    height: auto;
  }

  @keyframes fall {
    0% {
      -webkit-mask-position-y: 50%;
    }

    100% {
      -webkit-mask-position-y: 1000%;
    }
  }
</style>

<div class="container">
  <div class="bg">
    <img
      style="--posX: {posX}; --posY: {posY};"
      class="mask-image"
      width="1000"
      height="667"
      src="/images/adam-kool-unsplash.jpg"
      alt=""
    />
  </div>

  <div class="code">
    <CodeBlock {styleId} questionMark height="400px" code="{maskImage}" />
  </div>

  <div class="controls">
    <img class="mask-thumb" src="/images/varun-gaba-unsplash.png" alt="" />
    <Range
      title="Y"
      rotated="{false}"
      min="{-200}"
      max="{400}"
      value="{posY}"
      on:change="{(e) => (posY = e.detail.value)}"
    />

    <Range
      title="X"
      rotated="{false}"
      min="{-200}"
      max="{200}"
      value="{posX}"
      on:change="{(e) => (posX = e.detail.value)}"
    />
  </div>
</div>
