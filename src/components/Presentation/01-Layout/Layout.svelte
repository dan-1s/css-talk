<script>
  import { fullscreen } from '../../../actions';
  import Tabs from '../../Common/Tabs/Tabs.svelte';
  import GridAreas from './Parts/GridAreas.svelte';
  import GridRepeat from './Parts/GridRepeat.svelte';
  import GridLines from './Parts/GridLines.svelte';

  const name = 'layout';
  const styleId = 'css--layout';

  const tabs = [
    {
      tab: '1',
      component: GridAreas,
      props: {
        styleId,
      },
    },
    {
      tab: '2',
      component: GridRepeat,
      props: {
        styleId,
      },
    },
    {
      tab: '3',
      component: GridLines,
      props: {
        styleId,
      },
    },
  ];
</script>

<div id="{name}" class="full-screen grid-center" use:fullscreen>
  <h2 class="xl grid-center">
    CSS
    <span class="sub md">Layout</span>
  </h2>
</div>

<Tabs {name} components="{tabs}" />
