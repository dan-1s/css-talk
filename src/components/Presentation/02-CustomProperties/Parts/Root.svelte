<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { root, awesomeBtn } from '../code-examples';

  export let styleId;

  let isAwesome = false;
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1rem 1fr;
    grid-template-areas:
      'left . right'
      'result result result';
  }

  .left,
  .right {
    width: 100%;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }

  .result {
    grid-area: result;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="container">
  <div class="left">
    <CodeBlock styleId="{styleId + '-root'}" height="300px" code="{root}" />
  </div>

  <div class="right">
    <CodeBlock
      styleId="{styleId + '-awesome-btn'}"
      height="300px"
      code="{awesomeBtn}"
    />
  </div>

  <div class="result">
    <button
      on:click="{() => (isAwesome = !isAwesome)}"
      class:awesome-btn="{isAwesome}">My button</button
    >
  </div>
</div>
