<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import {
    scrollSnap1,
    scrollSnap2,
    scrollSnap3,
    scrollSnap4,
    scrollAreaHtml,
  } from '../code-examples';
  import Button from '../../../Common/Button.svelte';
  import Example from './Example.svelte';

  export let styleId;

  let htmlCode = scrollAreaHtml;
  let selectedCss = scrollSnap1;
  let selectedNumber = 1;

  $: jsVersion = selectedNumber >= 3;

  const codeSnippets = [
    { number: 1, code: scrollSnap1 },
    { number: 2, code: scrollSnap2 },
    { number: 3, code: scrollSnap3 },
    { number: 4, code: scrollSnap4 },
  ];

  function createBlock({ detail }) {
    htmlCode = detail.value;
  }

  const select = (code, number) => () => {
    selectedCss = code;
    selectedNumber = number;
  };
</script>

<style>
  .container {
    display: grid;
    grid-template-areas:
      'css css btns html html'
      '. result result result .';
    grid-template-columns: 1fr 1fr 150px 1fr 1fr;
    grid-template-rows: auto;
    align-items: flex-end;
    grid-gap: 3rem;
  }

  .css {
    grid-area: css;
  }

  .result {
    grid-area: result;
    max-width: 600px;
    margin: auto;
  }

  .html {
    grid-area: html;
  }

  .snippets {
    grid-area: btns;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1200px) {
    .container {
      grid-template-areas:
        'html'
        'css'
        'btns'
        'result';
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-gap: 3rem;
    }

    .snippets {
      flex-direction: row;
      justify-content: center;
    }
  }
</style>

<div class="container">
  <div class="html">
    <CodeBlock
      injectStyle="{false}"
      on:change="{createBlock}"
      height="350px"
      code="{scrollAreaHtml}"
    />
  </div>

  <div class="css">
    <CodeBlock
      styleId="{styleId + '-common'}"
      height="350px"
      code="{selectedCss}"
    />
  </div>

  <div class="snippets">
    {#each codeSnippets as { number, code }}
      <Button
        active="{code === selectedCss}"
        onClickHandler="{select(code, number)}"
      >
        {number}
      </Button>
    {/each}
  </div>

  <div class="result">
    {#if jsVersion}
      <Example />
    {:else}
      {@html htmlCode}
    {/if}
  </div>
</div>
