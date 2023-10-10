<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import Button from '../../../Common/Button.svelte';
  import { gridAreasOne, gridAreasTwo, gridAreasThree } from '../code-examples';
  import { gridAreasSelected } from '../store';

  export let styleId;

  let examples = [1, 2, 3];
  let css = [gridAreasOne, gridAreasTwo, gridAreasThree];

  let exampleCode = '';
  $: if ($gridAreasSelected) {
    exampleCode = css[$gridAreasSelected - 1];
  }
</script>

<style>
  .grid-areas-container {
    display: grid;
    width: 100%;
    height: 85vh;
    grid-template-rows: 350px 1rem 10fr;
    grid-template-columns: 3fr 2fr;
    grid-template-areas:
      'left right'
      '. . '
      'result result';
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .grid-areas {
    grid-area: result;
  }

  .grid-areas > * {
    opacity: 0.75;
  }

  .header {
    background: hsl(255, 0%, 90%);
  }

  .sideA {
    background: hsl(255, 0%, 87.5%);
  }

  .sideB {
    background: hsl(255, 0%, 85%);
  }

  .content {
    background: hsl(255, 0%, 82.5%);
  }

  .footer {
    background: hsl(255, 0%, 80%);
  }

  .text {
    height: 100%;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 2rem;
    color: #000;
  }
</style>

<div class="grid-areas-container">
  <div class="left">
    <CodeBlock {styleId} questionMark height="100%" code="{exampleCode}" />
  </div>

  <div class="right">
    {#each examples as nr}
      <Button
        onClickHandler="{() => gridAreasSelected.set(nr)}"
        active="{$gridAreasSelected === nr}"
      >
        Layout {nr}
      </Button>
    {/each}
  </div>

  <div
    class="grid-areas"
    class:one="{$gridAreasSelected === 1}"
    class:two="{$gridAreasSelected === 2}"
    class:three="{$gridAreasSelected === 3}"
  >
    <header class="header">
      <span class="text">top</span>
    </header>
    <aside class="sideA">
      <span class="text">sideA</span>
    </aside>
    <aside class="sideB">
      <span class="text">sideB</span>
    </aside>
    <section class="content">
      <span class="text">content</span>
    </section>
    <footer class="footer">
      <span class="text">footer</span>
    </footer>
  </div>
</div>
