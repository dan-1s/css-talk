<script>
  import { fullscreen } from '../../../actions/fullscreen';
  import Tabs from '../../Common/Tabs/Tabs.svelte';
  import Sliders from './Parts/Sliders.svelte';
  import Root from './Parts/Root.svelte';
  import Local from './Parts/Local.svelte';
  import ColorPalette from './Parts/ColorPalette.svelte';

  const name = 'custom-properties';
  const props = {
    styleId: 'css--custom-properties',
  };

  const tabs = [
    { tab: '1', component: Sliders },
    { tab: '2', component: Root, props },
    { tab: '3', component: Local, props },
    { tab: '4', component: ColorPalette, props },
  ];
</script>

<div id="{name}" class="full-screen grid-center" use:fullscreen>
  <h2 class="xl grid-center">
    CSS
    <span class="md">Custom Properties</span>
  </h2>
</div>

<Tabs {name} components="{tabs}" />
