<script>
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import { pathOutside } from '../code-examples';

  export let styleId;

  let imageLoaded = false;
</script>

<style>
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 'res code';
  }

  .result {
    grid-area: res;
  }

  .code {
    grid-area: code;
  }

  .star-wars-ipsum:not(.show) {
    visibility: hidden;
  }

  h1,
  h2 {
    text-align: left;
  }

  p {
    line-height: 1.5rem;
  }
</style>

<div class="container">
  <div class="code">
    <CodeBlock {styleId} questionMark height="600px" code="{pathOutside}" />
  </div>
  <div class="result">
    <img
      width="1500"
      height="1709"
      loading="lazy"
      on:load="{() => (imageLoaded = true)}"
      class="img-shape-outside"
      src="/images/lauren-mancke-unsplash.jpg"
      alt=""
    />
    <div class="star-wars-ipsum" class:show="{imageLoaded}">
      <h1>No! Alderaan is peaceful. We have no weapons. You can't possibly…</h1>
      <p>
        I need your help, Luke. She needs your help. I'm getting too old for
        this sort of thing. Dantooine. They're on Dantooine. You mean it
        controls your actions? Remember, a Jedi can feel the Force flowing
        through him.
      </p>
      <p>
        Don't act so surprised, Your Highness. You weren't on any mercy mission
        this time. Several transmissions were beamed to this ship by Rebel
        spies. <strong>
          I want to know what happened to the plans they sent you.</strong
        > <em> You are a part of the Rebel Alliance and a traitor!</em> Take her
        away!
      </p>
      <h2>You're all clear, kid. Let's blow this thing and go home!</h2>
      <p>
        Hey, Luke! May the Force be with you. I can't get involved! I've got
        work to do! It's not that I like the Empire, I hate it, but there's
        nothing I can do about it right now. It's such a long way from here.
      </p>

      <h3>Hey, Luke! May the Force be with you.</h3>
      <p>
        Escape is not his plan. I must face him, alone. You mean it controls
        your actions? Don't be too proud of this technological terror you've
        constructed. The ability to destroy a planet is insignificant next to
        the power of the Force.
      </p>
      <p>
        I call it luck. What good is a reward if you ain't around to use it?
        Besides, attacking that battle station ain't my idea of courage. It's
        more like…suicide. I call it luck. You are a part of the Rebel Alliance
        and a traitor! Take her away!
      </p>
      <p>
        A tremor in the Force. The last time I felt it was in the presence of my
        old master. I need your help, Luke. She needs your help. I'm getting too
        old for this sort of thing. I need your help, Luke. She needs your help.
        I'm getting too old for this sort of thing.
      </p>
      <p>
        You mean it controls your actions? Dantooine. They're on Dantooine.
        You're all clear, kid. Let's blow this thing and go home! Hey, Luke! May
        the Force be with you.
      </p>
    </div>
  </div>
</div>
