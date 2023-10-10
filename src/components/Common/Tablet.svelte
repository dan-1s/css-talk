<script>
  export let widthToHeightRatio = 1.5;
  export let maxWidth;

  let scrollArea;
  let width = 0;
  $: height = width * widthToHeightRatio + 'px';
</script>

<style>
  .shell {
    width: 100%;
    height: var(--height);
    max-width: var(--max-width, none);
    box-shadow:
      0 0 0 28px black,
      0 0 0 29px #bbb,
      0 0 0 31px #ccc,
      0 0 0 32px #fff,
      0 0 20px 35px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    margin: 2rem;
  }

  .shell:before,
  .shell:after {
    position: absolute;
    content: '';
  }

  .shell:before {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: white;
    box-shadow: 0 0 0 20px black;
    border-radius: 25px;
    z-index: 0;
  }

  .shell:after {
    top: 10%;
    right: -35px;
    height: 35px;
    width: 2px;
    background: #888;
    box-shadow:
      1px 0 0 0 #bbb,
      2px 0 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 15%;
  }

  .bottom-btns,
  .bottom-btns:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 70px;
    background: #888;

    box-shadow:
      0 1px 0 0 #bbb,
      0 2px 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 15%;
  }

  .bottom-btns {
    bottom: -35px;
    left: 10%;
  }

  .bottom-btns:after {
    left: 100px;
  }

  .tablet-content {
    position: absolute;
    top: 0;
    left: 0;

    border-radius: 15px;
    padding: 2rem;
    box-sizing: border-box;

    height: 100%;
    width: 100%;
    overflow: auto;
  }
</style>

<div
  class="shell"
  style="--height: {height}; --max-width: {maxWidth};"
  bind:clientWidth="{width}"
>
  <span class="bottom-btns"></span>
  <div bind:this="{scrollArea}" class="tablet-content">
    <slot {scrollArea} />
  </div>
</div>
