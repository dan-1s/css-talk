<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import Button from '../../../Common/Button.svelte';
  import Cards from '../../../Common/Cards.svelte';
  import Range from '../../../Common/Range.svelte';
  import { repeatOne, repeatTwo, repeatThree } from '../code-examples';
  import { gridRepeatCards, gridRepeatSelected } from '../store';

  export let styleId;

  let css = [repeatOne, repeatTwo, repeatThree];

  let exampleCode = '';
  $: if ($gridRepeatSelected) {
    exampleCode = css[$gridRepeatSelected - 1];
  }

  function changeCards({ detail }) {
    gridRepeatCards.set(detail.value);
  }

  $: cards = new Array($gridRepeatCards).fill(1).map((x, i) => x + i);
</script>

<style>
  .grid-repeat {
    display: grid;
    width: 100%;
    grid-gap: 1rem;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 8fr 3fr 1fr;
    grid-template-areas:
      'left middle right'
      'result result result';
  }

  .top-left {
    grid-area: left;
  }

  .top-middle {
    grid-area: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .top-right {
    grid-area: right;
  }

  .result {
    grid-area: result;
  }
</style>

<div class="grid-repeat">
  <div class="top-left">
    <CodeBlock styleId="{styleId}" height="100%" code="{exampleCode}" />
  </div>

  <div class="top-middle">
    <Button
      active="{$gridRepeatSelected === 1}"
      onClickHandler="{() => ($gridRepeatSelected = 1)}">Grid</Button
    >

    <Button
      active="{$gridRepeatSelected === 2}"
      onClickHandler="{() => ($gridRepeatSelected = 2)}">Flexbox</Button
    >

    <Button
      active="{$gridRepeatSelected === 3}"
      onClickHandler="{() => ($gridRepeatSelected = 3)}"
    >
      Flexbox media query
    </Button>
  </div>

  <div class="top-right">
    <Range
      title="Cards"
      value="{$gridRepeatCards}"
      min="{0}"
      max="{12}"
      on:change="{changeCards}"
    />
  </div>

  <div class="result">
    <Cards items="{cards}" />
  </div>
</div>
