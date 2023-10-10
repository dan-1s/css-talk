<script>
  import { createEventDispatcher } from 'svelte';
  import { generateId } from '../../utils';
  const dispatch = createEventDispatcher();

  export let title;
  export let divider = 1;
  export let rotated = true;

  export let value;
  export let min;
  export let max;
  export let step = 1;

  const id = generateId();

  $: dispatch('change', { value });
</script>

<style>
  .rotated input[type='range'] {
    transform: rotateZ(270deg);
    height: 200px;
  }

  .input-range {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  :global(.input-range + .input-range) {
    border-left: none;
  }
</style>

<div class="input-range" class:rotated>
  <label for="{id}">{title || 'Missing title'} ({value / divider})</label>
  <input {id} type="range" {min} {max} {step} bind:value />
</div>
