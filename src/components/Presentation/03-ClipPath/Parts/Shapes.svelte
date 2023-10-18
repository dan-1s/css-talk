<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { pentagon, star, triangle, arrow } from '../code-examples';
  import Button from '../../../Common/Button.svelte';

  export let styleId;

  let toggled = false;
  let selectedCode = '';
  const getSelectCodeFn = (code) => () => (selectedCode = code);

  const shapes = [
    { name: 'Pentagon', select: getSelectCodeFn(pentagon) },
    { name: 'Star', select: getSelectCodeFn(star) },
    { name: 'Triangle', select: getSelectCodeFn(triangle) },
    { name: 'Arrow', select: getSelectCodeFn(arrow) },
  ];

  function toggle() {
    toggled = !toggled;
  }
</script>

<style>
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .container > * {
    min-width: 0;
    min-height: 0;
  }

  .controls {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  img {
    height: auto;
    min-width: 300px;
    width: 100%;
  }
</style>

<div class="container">
  <div class="code" class:clip-path-img-a="{toggled}">
    <CodeBlock {styleId} questionMark height="100%" code="{selectedCode}" />
  </div>

  <div class="controls">
    {#each shapes as { name, select }}
      <Button minWidth="200px" onClickHandler="{select}">{name}</Button>
    {/each}

    <Button minWidth="200px" onClickHandler="{toggle}">
      {toggled ? 'On' : 'Off'}
    </Button>
  </div>

  <div class="result">
    <img
      width="1199"
      height="1500"
      loading="lazy"
      class="clip-path-img-a"
      src="/images/max-bender-unsplash.jpg"
      alt=""
    />
  </div>
</div>
