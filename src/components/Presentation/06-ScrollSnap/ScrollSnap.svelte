<script>
  import { fullscreen } from '../../../actions/fullscreen';
  import Tabs from '../../Common/Tabs/Tabs.svelte';
  import HozScroll from './Parts/HozScroll.svelte';

  const props = {
    styleId: 'css--scroll-snap',
  };

  export const tabs = [{ tab: '1', component: HozScroll, props }];
</script>

<div id="scroll-snap" class="full-screen grid-center" use:fullscreen>
  <h2 class="xl grid-center">
    CSS
    <span class="md">Scroll Snap</span>
  </h2>
</div>

<Tabs name="scroll-snap" components="{tabs}" />
