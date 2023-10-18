<script>
  import { tabNames } from '../../Common/Tabs/tabsStore.js';

  const titles = {
    layout: 'Layout',
    'custom-properties': 'Custom Properties',
    'clip-path': 'Clip Path',
    'filters-and-masks': 'Filter and Mask',
    'aspect-ratio': 'Aspect Ratio',
    'scroll-snap': 'Scroll Snap',
  };
</script>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 8fr;
    grid-template-areas:
      'agenda'
      'nav';
  }

  h1 {
    grid-area: agenda;
    text-align: center;
    font-weight: 700;
    color: var(--primary-color-20);
  }

  nav {
    display: flex;
    grid-area: nav;
    justify-content: space-around;
    align-items: flex-start;
  }

  a {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    font-size: 1.5rem;
    align-items: center;
    text-align: center;
    color: var(--primary-color-20);
    text-decoration: none;
    padding: 3rem 0;
  }

  a:first-child {
    border-left: none;
  }

  a:hover {
    color: var(--secondary-color-50);
  }

  .nr {
    font-size: 2em;
    margin-bottom: 2rem;
  }

  .name {
    display: block;
    max-width: 10ch;
  }

  @media screen and (max-width: 960px) {
    a {
      padding: 0.5rem 0;
      font-size: 1.2rem;
      min-width: calc(125 / 16 * 1rem);
    }

    nav {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 100%;
    }
  }
</style>

<header class="full-screen">
  <h1>CSS Talk</h1>

  <nav>
    {#each $tabNames as name, i}
      <a href="#{name}">
        <span class="nr">{i + 1}.</span>
        <span class="name">{titles[name]}</span>
      </a>
    {/each}
  </nav>
</header>
