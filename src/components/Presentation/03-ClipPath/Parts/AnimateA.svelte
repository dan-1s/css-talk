<script>
  import { animationA } from '../code-examples';
  import CodeBlock from '../../../Common/CodeBlock.svelte';

  export let styleId;
</script>

<style>
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    height: auto;
    max-width: 600px;
    width: 100%;
  }
</style>

<div class="container">
  <CodeBlock {styleId} questionMark height="600px" code="{animationA}" />

  <div class="result">
    <img
      width="1199"
      height="1500"
      loading="lazy"
      class="clip-path-img-animate-a"
      src="/images/max-bender-unsplash.jpg"
      alt=""
    />
  </div>
</div>
