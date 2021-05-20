<script>
  import { onMount } from 'svelte';

  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;

  export let rootElement;
  export let threshold = [0.5];

  let element;
  let observer;
  let intersectionRatio = -1;
  let intersectionObserverSupport = false;

  let unobserve = () => {};

  function intersectPercent(entries) {
    entries.forEach((entry) => {
      intersectionRatio = entry.intersectionRatio;
    });
  }

  onMount(() => {
    intersectionObserverSupport =
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype;

    const options = {
      root: rootElement,
      rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
      threshold,
    };

    if (intersectionObserverSupport) {
      observer = new IntersectionObserver(intersectPercent, options);
      observer.observe(element);
      unobserve = () => observer.unobserve(element);
    }

    return unobserve;
  });
</script>

<div bind:this="{element}">
  <slot
    intersectionRatio="{intersectionRatio}"
    unobserve="{unobserve}"
    intersectionObserverSupport="{intersectionObserverSupport}"
  />
</div>
