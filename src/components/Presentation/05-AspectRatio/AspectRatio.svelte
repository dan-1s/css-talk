<script>
  import { fullscreen } from '../../../actions/fullscreen';
  import Tabs from '../../Common/Tabs/Tabs.svelte';
  import Intro from './Parts/Intro.svelte';
  import Box from './Parts/Box.svelte';

  const props = {
    styleId: 'css--aspect-ratio',
  };

  export const tabs = [
    { tab: '1', component: Intro, props },
    { tab: '2', component: Box, props },
  ];
</script>

<div id="aspect-ratio" class="full-screen grid-center" use:fullscreen>
  <h2 class="xl grid-center">
    CSS
    <span class="md">Aspect Ratio</span>
  </h2>
</div>

<Tabs name="aspect-ratio" components="{tabs}" />
