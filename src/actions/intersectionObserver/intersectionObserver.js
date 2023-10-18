import { intersect } from './intersectStore';

function stepsToTresHold(steps) {
  return Array(steps)
    .fill(0)
    .map((_, i) => i / steps);
}

function intersectPercent(key) {
  return (entries) => {
    for (const entry of entries) {
      const ratio = entry.intersectionRatio;

      intersect.update((x) => {
        return { ...x, [key]: { ratio } };
      });
    }
  };
}

export function intersectionObserver(node, { steps, key }) {
  let observer;

  const options = {
    threshold: stepsToTresHold(steps),
    rootMargin: '0px 0px 0px 0px',
  };

  observer = new IntersectionObserver(intersectPercent(key), options);
  observer.observe(node);

  function unobserve() {
    observer.unobserve(node);
  }

  return {
    destroy() {
      unobserve();
    },
  };
}
