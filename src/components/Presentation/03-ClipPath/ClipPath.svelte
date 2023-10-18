<script>
  import { fullscreen } from '../../../actions/fullscreen';
  import Tabs from '../../Common/Tabs/Tabs.svelte';
  import Shapes from './Parts/Shapes.svelte';
  import AnimateA from './Parts/AnimateA.svelte';
  import AnimateB from './Parts/AnimateB.svelte';
  import ShapeOutside from './Parts/ShapeOutside.svelte';
  import RevealEffect from './Parts/RevealEffect.svelte';

  const name = 'clip-path';
  const props = {
    styleId: 'css--clip-path',
  };

  const tabs = [
    { tab: '1', component: Shapes, props },
    { tab: '2', component: AnimateA, props },
    { tab: '3', component: AnimateB, props },
    { tab: '4', component: ShapeOutside, props },
    { tab: '5', component: RevealEffect, props },
  ];
</script>

<div id="{name}" class="full-screen grid-center" use:fullscreen>
  <h2 class="xl grid-center">
    CSS
    <span class="md">Clip Path</span>
  </h2>
</div>

<Tabs {name} components="{tabs}" />
