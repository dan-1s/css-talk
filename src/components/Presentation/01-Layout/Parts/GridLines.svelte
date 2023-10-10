<script>
  import Range from '../../../Common/Range.svelte';
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { getGridlinesCss } from '../code-examples';

  export let styleId;

  let rows = 2;
  let cols = 2;
  let selected = 0;

  function reset() {
    selected = 0;
  }

  let exampleCode = '';
  $: {
    exampleCode = getGridlinesCss(cols, rows);
  }

  let summaries = [
    'Repeatable with automatic wrapping',
    'Dimensions between min and max',
    'Adapts to the container width',
    'Less need for media queries',
  ];

  function changeColumns({ detail }) {
    cols = detail.value;
  }

  function changeRows({ detail }) {
    rows = detail.value;
  }
</script>

<style>
  .top-grid {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 350px 2rem 350px 2rem;
    grid-template-columns: 2fr 2rem 1fr;
    grid-template-areas:
      'left . right'
      '. . .'
      'result result result'
      '. . .';
  }

  .left {
    grid-area: left;
  }

  .right {
    display: flex;
    grid-area: right;
    max-width: 300px;
  }

  .gridlines {
    grid-area: result;
    font-size: 2rem;
    font-weight: 700;
    color: white;
    border: 1px solid #ccc;
  }

  .gridlines .one,
  .gridlines .two {
    display: grid;
    place-items: center;
  }

  .gridlines .one {
    background: var(--primary-color-40);
    opacity: 0.7;
  }

  .gridlines .two {
    background: var(--secondary-color-40);
    opacity: 0.7;
  }
</style>

<div class="top-grid">
  <div class="left">
    <CodeBlock {styleId} height="100%" code="{exampleCode}" />
  </div>
  <div class="right">
    <Range
      title="Columns"
      value="{cols}"
      min="{1}"
      max="{12}"
      on:change="{changeColumns}"
    />
    <Range
      title="Rows"
      value="{rows}"
      min="{1}"
      max="{12}"
      on:change="{changeRows}"
    />
  </div>

  <div class="gridlines">
    <div class="one">One</div>
    <div class="two">Two</div>
  </div>
</div>
