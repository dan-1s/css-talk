<script>
  import { fullscreen } from '../../../actions';
  import Tabs from '../../Common/Tabs/Tabs.svelte';
  import Intro from './Parts/Intro.svelte';
  import LazyLoad from './Parts/LazyLoad.svelte';
  import NativeLazyLoad from './Parts/NativeLazyLoad.svelte';

  const props = {
    styleId: 'css--images-and-layout',
  };

  export const tabs = [
    { tab: '1', component: Intro, props },
    { tab: '2', component: NativeLazyLoad, props },
    { tab: '3', component: LazyLoad, props },
  ];
</script>

<div id="images-and-layout" class="full-screen grid-center" use:fullscreen>
  <h2 class="xl grid-center">
    CSS
    <span class="md">Images and Layout</span>
  </h2>
</div>

<Tabs name="images-and-layout" components="{tabs}" />
