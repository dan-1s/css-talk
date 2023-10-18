<script>
  import { intersectionObserver } from '../../../../actions/intersectionObserver/intersectionObserver';
  import { intersect } from '../../../../actions/intersectionObserver/intersectStore';

  const images = [
    {
      height: 1281,
      width: 1920,
      src: '/images/peter-thomas-unsplash.jpg',
    },
    {
      height: 1280,
      width: 1920,
      src: '/images/anita-austvika-unsplash.jpg',
    },
    {
      height: 1280,
      width: 1920,
      src: '/images/pascal-debrunner-unsplash.jpg',
    },
    {
      height: 1280,
      width: 1920,
      src: '/images/clay-banks-unsplash.jpg',
    },
    {
      height: 1280,
      width: 1920,
      src: '/images/neom-unsplash.jpg',
    },
    {
      height: 1300,
      width: 1920,
      src: '/images/the-fry-family-food-unsplash.jpg',
    },
  ];
</script>

<div>
  <div class="scroll-area" style="--ratio: 3/4;">
    {#each images as { height, width, src }, i}
      {@const { ratio } = $intersect[`percent-${i + 1}`] || {}}

      <div
        class="box"
        style:--intersect="{ratio}"
        use:intersectionObserver="{{ key: `percent-${i + 1}`, steps: 100 }}"
      >
        <img {height} {width} {src} alt="" />
      </div>
    {/each}
  </div>

  <div class="indicators">
    {#each images as _, i}
      {@const { ratio } = $intersect[`percent-${i + 1}`] || {}}

      <span class="circle" style:--intersect="{ratio}"> </span>
    {/each}
  </div>
</div>
