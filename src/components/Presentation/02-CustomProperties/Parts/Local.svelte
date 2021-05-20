<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { root, awesomeBtn, createBtn } from '../code-examples';

  export let styleId;

  let btnProps = '';
  let btnText = '';
  let buttons = [];

  function prepareButton(event) {
    const span = document.createElement('span');
    span.innerHTML = event.detail.value.trim();

    if (span?.firstChild) {
      btnProps = span.firstChild?.getAttribute('style');
      btnText = span.firstChild?.firstChild?.nodeValue || '';
    }
  }

  function addButton() {
    buttons = [...buttons, { id: Date.now(), text: btnText, props: btnProps }];
  }

  const removeButton = (id) => () => {
    buttons = buttons.filter((x) => x.id !== id);
  };
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: 400px 1fr;
    grid-template-columns: 1fr 1rem 2fr;
    grid-template-areas:
      'left . right'
      'result . .';
  }

  .left,
  .right {
    width: 100%;
  }

  .left {
    grid-area: left;
    display: flex;
    flex-direction: column;
  }

  .right {
    grid-area: right;
  }

  .result {
    grid-area: result;
    display: flex;
    flex-direction: column;
  }
</style>

<div class="container">
  <div class="left">
    <CodeBlock styleId="{styleId}" height="300px" code="{root}" />
  </div>

  <div class="right">
    <CodeBlock
      injectStyle="{false}"
      on:change="{prepareButton}"
      height="300px"
      code="{createBtn}"
    />
  </div>

  <div class="result">
    <button class="awesome-btn" on:click="{addButton}">Add new</button>

    {#each buttons as { id, text, props }, i (id || i)}
      <button on:click="{removeButton(id)}" class="awesome-btn" style="{props}">
        {text}
      </button>
    {/each}
  </div>
</div>

<!-- With `hidden` we can inject styles without showing the code block.
     Here we inject the `awesome-btn` styles from exampleTwo. -->
<CodeBlock
  styleId="{styleId + '-awesome-button'}"
  hidden
  height="300px"
  code="{awesomeBtn}"
/>
