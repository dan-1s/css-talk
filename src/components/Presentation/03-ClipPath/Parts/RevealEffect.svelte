<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { revealCode } from '../code-examples';
  import Button from '../../../Common/Button.svelte';

  export let styleId;

  let reveal = false;
  let showCode = false;
  $: toggleText = reveal ? 'Hide' : 'Reveal';
  $: showCodeText = showCode ? 'Hide Code' : 'Show Code';
</script>

<style>
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: 620px auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'res code'
      'btn code';
  }

  .result {
    grid-area: res;
  }

  .code {
    grid-area: code;
  }

  .toggle {
    grid-area: btn;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    height: auto;
  }

  .front-img {
    filter: drop-shadow(0 5px 10px hsla(265, 0%, 0%, 0.8));
  }
</style>

<div class="container">
  <div class="code">
    <CodeBlock
      questionMark
      styleId="{styleId}"
      height="600px"
      code="{revealCode}"
    />
  </div>
  <div class="result">
    <div class="reveal-container">
      <img
        width="2000"
        height="1333"
        class="front-img"
        loading="lazy"
        src="/images/artem-beliaikin-EjvSaFMhz9k-unsplash.png"
        alt=""
      />
      <img
        width="2000"
        height="1333"
        class="back-img"
        loading="lazy"
        class:show-back-img="{reveal}"
        src="/images/artem-beliaikin-EjvSaFMhz9k-unsplash.jpg"
        alt=""
      />
    </div>
  </div>

  <div class="toggle">
    <Button minWidth="200px" onClickHandler="{() => (reveal = !reveal)}">
      {toggleText}
    </Button>
  </div>
</div>
