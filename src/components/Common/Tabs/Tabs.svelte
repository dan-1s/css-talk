<script context="module">
  let tabNameSet = new Set();
</script>

<script>
  import { generateId } from '../../../utils';
  import { selectedTab, tabNames } from './tabsStore';

  export let name;
  export let components = [];
  export let minHeight = '600px';
  const id = generateId();

  if (!name) {
    throw new Error('Please provide a name for Tabs component');
  } else if (tabNameSet.has(name)) {
    throw new Error(
      `Unique name not provided: Name ${name} occurred more than once.`
    );
  } else {
    tabNameSet.add(name);
    tabNames.update((xs) => [...xs, name]);
  }

  function getInputId(id, { tab }) {
    return `${id}-${tab}`;
  }

  let disableAnchorLink = false;
  function changeTab(name, tab) {
    // We disable anchor links for a small duration when switching tabs to avoid
    // scrolling to something that's already in view. We still want the benefit anchor
    // links, one can copy the url and paste it in and it should navigate to that tab.
    disableAnchorLink = true;
    selectedTab.set({ name, tab });

    setTimeout(() => {
      disableAnchorLink = false;
    }, 300);
  }

  function getAnchorLinkId(name, tab, disableAnchorLink) {
    if (disableAnchorLink) return {};

    return { id: `${name}--tab-${tab}` };
  }

  let selected = components[0];

  $: if (name === $selectedTab.name && components) {
    const match = components.find(({ tab }) => tab === $selectedTab.tab);

    if (match) {
      selected = match;
    }
  }
</script>

<style>
  .tabs {
    display: flex;
    align-items: center;
  }

  input {
    display: none;
  }

  label {
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    height: 2rem;
    width: 6rem;
    justify-content: center;
    align-items: center;
    border-bottom: none;
    padding: 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    color: black;
  }

  label:hover {
    color: var(--primary-color-60);
  }

  input:checked + label {
    background: hsl(var(--primary), 99.5%);
    box-shadow: 0 0 10px -5px hsl(200, 0%, 40%);
    position: relative;
    color: var(--primary-color-50);
  }

  input:checked + label::before {
    position: absolute;
    bottom: -30px;
    left: 0;
    content: '';
    width: 100%;
    height: 50px;
    background: hsl(var(--primary), 99.5%);
  }

  input:first-of-type:checked + label::before {
    box-shadow: -9px 0 10px -13px hsl(200, 0%, 40%);
  }

  .content {
    padding: 2rem;
    background: hsl(var(--primary), 99.5%);
    box-shadow: 0 10px 20px -5px hsl(200, 0%, 40%);
    border-radius: 5px;
    min-height: var(--min-height, 400px);
  }
</style>

<div class="tabs">
  {#each components as component}
    <input
      type="radio"
      id="{getInputId(id, component)}"
      value="{component}"
      bind:group="{selected}"
      on:change="{() => changeTab(name, component.tab)}"
    />
    <label
      {...getAnchorLinkId(name, component.tab, disableAnchorLink)}
      for="{getInputId(id, component)}"
    >
      {component.tab}
    </label>
  {/each}
</div>

<div class="content" style="--min-height: {minHeight}">
  {#if selected}
    <svelte:component this="{selected.component}" {...selected.props} />
  {/if}
</div>
