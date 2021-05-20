<script>
  import { fly } from 'svelte/transition';
  import start from './timerStore';

  let elapsed;
</script>

<style>
  .timer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 1rem;
    right: 1.5rem;
    z-index: 2;
  }

  button {
    grid-area: control;
    background: none;
    border: none;
    color: var(--primary-color-20);
  }

  button:hover {
    color: var(--secondary-color-50);
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .time {
    display: block;
    font-weight: 700;
    color: var(--secondary-color-60);
  }

  .text {
    margin-top: 0.25rem;
  }
</style>

<div class="timer" class:started="{elapsed}">
  {#if elapsed}
    <span in:fly="{{ x: 50, duration: 3000 }}" class="time">
      {$elapsed}
    </span>
  {:else}
    <button out:fly="{{ x: 50 }}" on:click="{() => (elapsed = start())}">
      <span class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
          >
          </path>
        </svg>
        <span class="text">start</span>
      </span>
    </button>
  {/if}
</div>
