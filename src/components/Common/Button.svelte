<script>
  export let onClickHandler;
  export let active = false;
  export let minWidth = 'auto';
</script>

<style>
  .flex {
    display: flex;
    justify-content: center;
  }

  .active {
    color: var(--primary-color-40);
    border-color: var(--primary-color-40);
    box-shadow:
      1px 1px 0 var(--primary-color-80),
      2px 2px 0 var(--primary-color-50),
      5px 5px 0 black;
  }

  button {
    padding: 1rem 2rem;
    background: transparent;
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
    border: 1px solid black;
    letter-spacing: 0.05rem;
    margin: 1rem;
    border-radius: 0.25rem;
    min-width: var(--min-width, auto);
    box-shadow: 5px 5px 0 black;
  }

  button:hover,
  button:focus {
    color: var(--primary-color-50);
    border-color: var(--primary-color-50);
  }
</style>

<button
  on:click="{onClickHandler}"
  class:active
  style="--min-width: {minWidth}"
>
  <span class="flex">
    <slot />
  </span>
</button>
