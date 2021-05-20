<script>
  export let items = [];

  let placeHolders = [
    "But with the blast shield down, I can't even see! How am I supposed to fight? Red Five standing by. Escape is not his plan. I must face him, alone. Oh God, my uncle. How am I ever gonna explain this? Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.",
    "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. In my experience, there is no such thing as luck. What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like…suicide.",
    "I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it right now. It's such a long way from here. I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it right now. It's such a long way from here.",
    "You don't believe in the Force, do you? Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us this time!",
    "What!? I call it luck. I'm surprised you had the courage to take the responsibility yourself. Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.",
    "I find your lack of faith disturbing. Still, she's got a lot of spirit. I don't know, what do you think? Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force",
    "Still, she's got a lot of spirit. I don't know, what do you think? Partially, but it also obeys your commands. Don't underestimate the Force. I'm trying not to, kid.",
    "Hey, Luke! May the Force be with you. I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. He is here. You don't believe in the Force, do you? All right. Well, take care of yourself, Han. I guess that's what you're best at, ain't it?",
    "Oh God, my uncle. How am I ever gonna explain this? I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it right now. It's such a long way from here.",
    "Alderaan? I'm not going to Alderaan. I've got to go home. It's late, I'm in for it as it is. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. The plans you refer to will soon be back in our hands.",
  ];

  function getPlaceHolder(i) {
    return (
      placeHolders[i] ||
      placeHolders[Math.floor(Math.random() * placeHolders.length)]
    );
  }
</script>

<style>
  .card {
    display: grid;
    grid-template-rows: 5rem 1fr;
    grid-template-areas:
      'top'
      'content';
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    grid-area: top;
  }

  .content {
    grid-area: content;
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding: 1.5rem;
  }
</style>

<div class="repeat">
  {#each items as nr}
    <section class="card">
      <header>
        <h3 class="card-title">{nr}. Card</h3>
      </header>
      <div class="content">{getPlaceHolder(nr)}</div>
    </section>
  {/each}
</div>
