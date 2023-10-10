<script>
  export let hidden = false;
  export let questionMark;
  export let height;

  $: if (questionMark) {
    hidden = true;
  }

  let animate;
  const unHideWithDelay = (delay) => () => {
    animate = true;

    setTimeout(() => {
      animate = false;
      hidden = false;
    }, delay);
  };
</script>

<style>
  .mac-dots::after,
  .mac-dots::before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }

  .mac-dots {
    position: relative;
    display: block;
    height: 12px;
    width: 12px;
    background: #fe5b52;
    border-radius: 50%;
  }

  .mac-dots::before {
    left: 20px;
    background: yellow;
  }

  .mac-dots::after {
    left: 40px;
    background: #54c12c;
  }

  .container {
    height: var(--height, 100%);
    display: grid;
    position: relative;
    grid-auto-rows: 40px 1fr;
    grid-template-areas:
      'top'
      'code';
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .top {
    grid-area: top;
    display: flex;
    align-items: center;
    padding: 1rem;
    background: #0f111a;
  }

  .hidden {
    display: none;
  }

  @keyframes bump {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.025);
    }

    100% {
      transform: scale(1);
    }
  }
  .has-question-mark:not(.hidden) {
    animation: bump 0.3s;
  }

  button {
    background: none;
    font-size: 15rem;
    font-weight: 300;
    border: none;
    outline: none;

    color: white;
    -webkit-text-stroke: 1px black;
    text-shadow:
      3px 3px 0 #000,
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  button:hover {
    color: var(--secondary-color-40);
    border-color: var(--secondary-color-40);
  }

  .animate {
    transform: rotate(1080deg) scale(0);
    border-radius: 50%;
    transition: 0.5s all;
  }

  .question-mark {
    height: var(--height, 100%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

{#if questionMark && hidden}
  <div class="question-mark" style="--height: {height}">
    <button on:click="{unHideWithDelay(500)}" class:animate>?</button>
  </div>
{/if}

<div
  style="--height: {height}"
  class:hidden
  class="container"
  class:has-question-mark="{questionMark}"
>
  <div class="top">
    <span class="mac-dots"></span>
  </div>
  <slot {hidden} />
</div>
