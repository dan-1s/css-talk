<script>
  import { onMount } from 'svelte';
  import { selectedTab } from './tabsStore';

  function updateURLHash(selectedTabs) {
    const { name, tab } = selectedTabs;
    if (!name || !tab) return;

    window.location.hash = `#${name}--tab-${tab}`;
  }

  $: selectedTab && updateURLHash($selectedTab);

  onMount(() => {
    const [_, value] = window.location.hash.split('#');
    if (!value) return;

    const [name, tab] = value.split('--tab-');
    selectedTab.set({ name, tab });
  });
</script>
