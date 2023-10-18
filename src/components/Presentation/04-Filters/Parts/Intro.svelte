<script>
  import Button from '../../../Common/Button.svelte';
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import {
    introStep1,
    introStep2,
    introStep3,
    introStep4,
  } from '../code-examples';

  export let styleId;

  let css = [introStep1, introStep2, introStep3, introStep4];
  let exampleCode = introStep1;
</script>

<style>
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .shadow {
    display: grid;
    place-items: center;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
  }
</style>

<div class="container">
  <div class="shadow">
    <img
      width="1465"
      height="1188"
      loading="lazy"
      class="intro-filters"
      src="/images/drew-graham-unsplash.png"
      alt=""
    />
  </div>

  <div>
    <CodeBlock {styleId} height="300px" questionMark code="{exampleCode}" />

    <div class="controls">
      {#each css as intro, i}
        <Button
          active="{exampleCode === intro}"
          onClickHandler="{() => (exampleCode = intro)}"
        >
          {i + 1}
        </Button>
      {/each}
    </div>
  </div>
</div>
