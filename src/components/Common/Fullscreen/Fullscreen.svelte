<script>
  import { onDestroy } from 'svelte';
  import requestFullscreen from './fullscreen';

  let fullScreen = false;

  function setFullScreen() {
    requestFullscreen(document.body);
    fullScreen = true;
  }

  function detectExitFullscreen() {
    if (!document.fullscreenElement) {
      fullScreen = false;
    }
  }

  document.addEventListener('fullscreenchange', detectExitFullscreen);
  onDestroy(() =>
    document.removeEventListener('fullscreenchange', detectExitFullscreen)
  );
</script>

<style>
  .fullscreen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 1rem;
    left: 1.5rem;
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

  .text {
    margin-top: 0.25rem;
  }
</style>

{#if !fullScreen}
  <div class="fullscreen">
    <button on:click="{setFullScreen}">
      <span class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M6.426 10.668l-3.547-3.547-2.879 2.879v-10h10l-2.879 2.879 3.547 3.547-4.242 4.242zm11.148 2.664l3.547 3.547 2.879-2.879v10h-10l2.879-2.879-3.547-3.547 4.242-4.242zm-6.906 4.242l-3.547 3.547 2.879 2.879h-10v-10l2.879 2.879 3.547-3.547 4.242 4.242zm2.664-11.148l3.547-3.547-2.879-2.879h10v10l-2.879-2.879-3.547 3.547-4.242-4.242z"
          ></path></svg
        >
        <span class="text">fullscreen</span>
      </span>
    </button>
  </div>
{/if}
