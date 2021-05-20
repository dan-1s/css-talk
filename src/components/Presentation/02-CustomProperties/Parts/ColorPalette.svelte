<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { commonUse } from '../code-examples';

  export let styleId;

  let isAwesome = false;

  const range = [10, 20, 30, 40, 50, 60, 70, 80, 90];
</script>

<style>
  .container {
    display: grid;
    grid-gap: 3rem;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-areas: 'code primary secondary';
  }

  @media screen and (max-width: 1200px) {
    .container {
      display: grid;
      grid-gap: 3rem;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'code code'
        'primary secondary';
    }
  }

  .code {
    grid-area: code;
  }

  .primary {
    grid-area: primary;
  }

  .secondary {
    grid-area: secondary;
  }

  p {
    font-weight: 700;
  }

  .bg {
    color: white;
    padding: 0.5rem;
  }

  .primary-10 {
    color: var(--primary-color-10);
  }
  .primary-20 {
    color: var(--primary-color-20);
  }
  .primary-30 {
    color: var(--primary-color-30);
  }
  .primary-40 {
    color: var(--primary-color-40);
  }
  .primary-50 {
    color: var(--primary-color-50);
  }
  .primary-60 {
    color: var(--primary-color-60);
  }
  .primary-70 {
    color: var(--primary-color-70);
  }
  .primary-80 {
    color: var(--primary-color-80);
  }
  .primary-90 {
    color: var(--primary-color-90);
  }

  .primary-bg-10 {
    background: var(--primary-color-10);
  }
  .primary-bg-20 {
    background: var(--primary-color-20);
  }
  .primary-bg-30 {
    background: var(--primary-color-30);
  }
  .primary-bg-40 {
    background: var(--primary-color-40);
  }
  .primary-bg-50 {
    background: var(--primary-color-50);
  }
  .primary-bg-60 {
    background: var(--primary-color-60);
  }
  .primary-bg-70 {
    background: var(--primary-color-70);
  }
  .primary-bg-80 {
    background: var(--primary-color-80);
  }
  .primary-bg-90 {
    background: var(--primary-color-90);
  }

  .secondary-10 {
    color: var(--secondary-color-10);
  }
  .secondary-20 {
    color: var(--secondary-color-20);
  }
  .secondary-30 {
    color: var(--secondary-color-30);
  }
  .secondary-40 {
    color: var(--secondary-color-40);
  }
  .secondary-50 {
    color: var(--secondary-color-50);
  }
  .secondary-60 {
    color: var(--secondary-color-60);
  }
  .secondary-70 {
    color: var(--secondary-color-70);
  }
  .secondary-80 {
    color: var(--secondary-color-80);
  }
  .secondary-90 {
    color: var(--secondary-color-90);
  }

  .secondary-bg-10 {
    background: var(--secondary-color-10);
  }
  .secondary-bg-20 {
    background: var(--secondary-color-20);
  }
  .secondary-bg-30 {
    background: var(--secondary-color-30);
  }
  .secondary-bg-40 {
    background: var(--secondary-color-40);
  }
  .secondary-bg-50 {
    background: var(--secondary-color-50);
  }
  .secondary-bg-60 {
    background: var(--secondary-color-60);
  }
  .secondary-bg-70 {
    background: var(--secondary-color-70);
  }
  .secondary-bg-80 {
    background: var(--secondary-color-80);
  }
  .secondary-bg-90 {
    background: var(--secondary-color-90);
  }
</style>

<div class="container">
  <div class="code">
    <CodeBlock
      styleId="{styleId + '-common'}"
      height="600px"
      code="{commonUse}"
    />
  </div>

  <div class="primary">
    {#each range as nr}
      <p class="primary-{nr}">primary-color-{nr}</p>
    {/each}

    {#each range as nr}
      <p class="primary-bg-{nr} bg">primary-color-{nr}</p>
    {/each}
  </div>

  <div class="secondary">
    {#each range as nr}
      <p class="secondary-{nr}">secondary-color-{nr}</p>
    {/each}

    {#each range as nr}
      <p class="secondary-bg-{nr} bg">secondary-color-{nr}</p>
    {/each}
  </div>
</div>
