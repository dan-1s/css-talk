<script>
  import Button from '../../../Common/Button.svelte';
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { dollShadows, drinkShadows } from '../code-examples';

  export let styleId;

  let selectedImageControl = 'doll';
  let css = {
    doll: dollShadows,
    drink: drinkShadows,
  };

  $: codeExample = css[selectedImageControl][0];
  $: selectedCss = css[selectedImageControl];
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: 600px auto;
    grid-template-columns: 650px 1fr 3fr;
    grid-template-areas:
      'img . code'
      'img-ctrls . code-ctrls';
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1400px) {
    .container {
      grid-gap: 2rem;
      grid-template-rows: 1fr auto auto auto;
      grid-template-columns: 1fr 6fr 1fr;
      grid-template-areas:
        'code code code'
        'code-ctrls code-ctrls code-ctrls'
        '. img .'
        '. img-ctrls .';
    }

    @media screen and (max-width: 768px) {
      .container {
        grid-gap: 2rem;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        grid-template-areas:
          'code'
          'code-ctrls'
          'img'
          'img-ctrls';
      }
    }
  }

  .image-container {
    grid-area: img;
    text-align: center;
    position: relative;
    margin-bottom: 2rem;
  }

  .code {
    grid-area: code;
  }

  .code-controls {
    grid-area: code-ctrls;
    justify-self: center;
  }

  .img-controls {
    grid-area: img-ctrls;
    justify-self: center;
  }

  .shadow-example {
    display: none;
  }

  .shadow-example.show {
    display: block;
  }

  .doll {
    width: 50%;
    position: relative;
    z-index: 1;
  }

  .drink {
    width: 80%;
    position: relative;
    z-index: 1;
  }

  .shadow-ground {
    transition: filter 2s;
  }

  .emoji {
    font-size: 3rem;
    line-height: 3rem;
  }

  button {
    background: none;
    margin: 0;
    border: none;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 1rem;
    filter: brightness(40%);
  }

  button:hover:not(.selected-img-control) {
    filter: brightness(70%) drop-shadow(5px 5px 10px #000);
  }

  .selected-img-control {
    filter: brightness(100%) drop-shadow(5px 5px 10px #000);
  }

  button ~ button {
    margin-left: 2rem;
  }
</style>

<div class="container">
  <div class="image-container">
    <div class="shadow-example" class:show="{selectedImageControl === 'doll'}">
      <img
        class="shadow-ground"
        src="/images/mockup-graphics-aUkYaG12Dgs-unsplash.png"
        alt=""
      />
      <img
        class="doll"
        src="/images/mockup-graphics-aUkYaG12Dgs-unsplash.png"
        alt=""
      />
    </div>

    <div class="shadow-example" class:show="{selectedImageControl === 'drink'}">
      <img
        class="shadow-ground"
        src="/images/nikita-tikhomirov-roMo1sOj8q8-unsplash.png"
        alt=""
      />
      <img
        class="drink"
        src="/images/nikita-tikhomirov-roMo1sOj8q8-unsplash.png"
        alt=""
      />
    </div>
  </div>

  <div class="img-controls">
    <button
      class:selected-img-control="{selectedImageControl === 'doll'}"
      on:click="{() => (selectedImageControl = 'doll')}"
    >
      <span class="emoji">🧸</span>
    </button>
    <button
      class:selected-img-control="{selectedImageControl === 'drink'}"
      on:click="{() => (selectedImageControl = 'drink')}"
    >
      <span class="emoji">🍹</span>
    </button>
  </div>

  <div class="code">
    <CodeBlock {styleId} height="400px" questionMark code="{codeExample}" />
  </div>

  <div class="code-controls">
    {#each selectedCss as code, i}
      <Button
        active="{code === codeExample}"
        onClickHandler="{() => (codeExample = code)}"
      >
        {i + 1}
      </Button>
    {/each}
  </div>
</div>
