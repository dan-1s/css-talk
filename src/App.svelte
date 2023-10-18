<script>
  import UrlAnchorLinks from './components/Common/Tabs/UrlAnchorLinks.svelte';
  import Overview from './components/Presentation/00-Overview/Overview.svelte';
  import Layout from './components/Presentation/01-Layout/Layout.svelte';
  import CustomProperties from './components/Presentation/02-CustomProperties/CustomProperties.svelte';
  import ClipPath from './components/Presentation/03-ClipPath/ClipPath.svelte';
  import Filters from './components/Presentation/04-Filters/Filters.svelte';
  import AspectRatio from './components/Presentation/05-AspectRatio/AspectRatio.svelte';
  import ScrollSnap from './components/Presentation/06-ScrollSnap/ScrollSnap.svelte';

  const components = [
    Layout,
    CustomProperties,
    ClipPath,
    Filters,
    AspectRatio,
    ScrollSnap,
  ];
</script>

<style>
  :global(:root) {
    --primary: 267, 89%;
    --primary-color-10: hsla(var(--primary), 10%, 1);
    --primary-color-20: hsla(var(--primary), 20%, 1);
    --primary-color-30: hsla(var(--primary), 30%, 1);
    --primary-color-40: hsla(var(--primary), 40%, 1);
    --primary-color-50: hsla(var(--primary), 50%, 1);
    --primary-color-60: hsla(var(--primary), 60%, 1);
    --primary-color-70: hsla(var(--primary), 70%, 1);
    --primary-color-80: hsla(var(--primary), 80%, 1);
    --primary-color-90: hsla(var(--primary), 90%, 1);

    --secondary: 335, 89%;
    --secondary-color-10: hsla(var(--secondary), 10%, 1);
    --secondary-color-20: hsla(var(--secondary), 20%, 1);
    --secondary-color-30: hsla(var(--secondary), 30%, 1);
    --secondary-color-40: hsla(var(--secondary), 40%, 1);
    --secondary-color-50: hsla(var(--secondary), 50%, 1);
    --secondary-color-60: hsla(var(--secondary), 60%, 1);
    --secondary-color-70: hsla(var(--secondary), 70%, 1);
    --secondary-color-80: hsla(var(--secondary), 80%, 1);
    --secondary-color-90: hsla(var(--secondary), 90%, 1);

    --code-font-size: 1.3rem;
  }

  :global(.xl) {
    color: var(--primary-color-20);
  }

  :global(main) {
    background: #fcf8f4;
    height: 100%;
    overflow: auto;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(h2) {
    text-align: center;
  }

  section {
    padding: 1rem;
  }
</style>

<UrlAnchorLinks />

<main>
  <Overview />

  {#each components as component}
    <section>
      <svelte:component this="{component}" />
    </section>
  {/each}
</main>
