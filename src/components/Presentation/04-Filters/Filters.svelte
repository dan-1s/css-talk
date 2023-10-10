<script>
  import { fullscreen } from '../../../actions';
  import Tabs from '../../Common/Tabs/Tabs.svelte';
  import GroundShadow from './Parts/GroundShadow.svelte';
  import Intro from './Parts/Intro.svelte';
  import BackdropFilters from './Parts/BackdropFilters.svelte';
  import Mask from './Parts/Mask.svelte';

  const name = 'filters-and-masks';
  const props = {
    styleId: 'css--filters',
  };

  const tabs = [
    { tab: '1', component: Intro, props },
    { tab: '2', component: GroundShadow, props },
    { tab: '3', component: BackdropFilters, props },
    { tab: '4', component: Mask, props },
  ];
</script>

<div id="{name}" class="full-screen grid-center" use:fullscreen>
  <h2 class="xl grid-center">
    CSS
    <span class="md">Filter and Mask</span>
  </h2>
</div>

<Tabs {name} components="{tabs}" />
