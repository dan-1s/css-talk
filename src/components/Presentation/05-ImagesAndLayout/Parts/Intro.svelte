<script>
  import Button from '../../../Common/Button.svelte';
  import Tablet from '../../../Common/Tablet.svelte';
  import CodeBlock from '../../../Common/CodeBlock.svelte';
  import {
    imagesNotReservingSpace,
    imagesReservingSpace,
  } from '../code-examples';
  import Range from '../../../Common/Range.svelte';
  import { createImagePicker } from '../../../../utils';

  export let styleId;
  export let tabletMaxWidth = 400;

  const pickImage = createImagePicker();

  let show = false;
  let cacheBuster = 0;
  let fixed = false;
  let delay = 0;

  function reload() {
    show = false;
    cacheBuster += 1;

    setTimeout(() => {
      show = true;
    }, 500);
  }

  function imageAttributes() {
    const { name, height, width } = pickImage();

    const delayProxyServer = 'http://localhost:8000';
    const attr = {
      src: `${delayProxyServer}/${name}?bust=${cacheBuster}&delay=${delay}`,
    };

    return fixed ? { ...attr, width, height } : attr;
  }
</script>

<style>
  h2 {
    text-align: left;
  }

  .container {
    width: 100%;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .controls {
    margin-bottom: 2rem;
  }

  .device {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  img {
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
  }

  .range {
    margin-top: 2rem;
  }
</style>

<div class="container">
  <div class="code">
    <CodeBlock
      {styleId}
      height="400px"
      questionMark
      code="{fixed ? imagesReservingSpace : imagesNotReservingSpace}"
    />

    <div class="range">
      <Range
        title="Max width"
        rotated="{false}"
        min="{300}"
        max="{700}"
        value="{400}"
        on:change="{(e) => (tabletMaxWidth = e.detail.value)}"
      />

      <Range
        title="Image delay (ms)"
        rotated="{false}"
        min="{0}"
        max="{7000}"
        step="{100}"
        value="{delay}"
        on:change="{(e) => (delay = e.detail.value)}"
      />
    </div>
  </div>

  <div class="device">
    <div class="controls">
      <Button onClickHandler="{() => (fixed = !fixed)}">
        {fixed ? 'Break it' : 'Fix it'}
      </Button>
      <Button onClickHandler="{reload}">
        {cacheBuster === 0 ? 'Load' : 'Reload'}
      </Button>
    </div>

    <Tablet widthToHeightRatio="{1.5}" maxWidth="{tabletMaxWidth}px">
      {#if show}
        <section>
          <h2>
            Twitter is exploring the use of Facebook-style emoji reactions
          </h2>

          <img {...imageAttributes(1)} alt="" />

          <p>
            If you’re old enough to remember the outrage that followed Twitter’s
            decision to replace stars with hearts (aka likes instead of
            favorites), then you know that Twitter’s user base has strong
            feelings about how it wants to engage with tweets.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            alias, aliquid aut dignissimos doloremque enim eos ex magnam maxime
            mollitia nemo neque nihil praesentium provident quia veritatis
            voluptatibus? Aliquam atque debitis deserunt dignissimos eligendi
            eveniet explicabo, maxime, molestias, nemo porro quo ratione soluta
            tempora vel voluptas. Aliquam animi corporis distinctio harum hic,
            nam omnis quisquam sequi. Distinctio dolorum ducimus, eos impedit
            libero magnam nemo numquam quam quis repudiandae totam vero,
            voluptatem. Aliquam amet cum earum necessitatibus officiis quo
            temporibus? Ad commodi consequatur eaque earum eius est id incidunt
            modi natus necessitatibus nisi officiis optio provident quaerat
            quas, rerum sequi veniam.
          </p>

          <img {...imageAttributes(2)} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            commodi consequuntur deleniti ducimus, earum facilis hic in, ipsum
            laborum provident quaerat ratione repellat sapiente sequi temporibus
            vero voluptates? Aperiam beatae dolorem esse, et facilis illo
            incidunt minus mollitia odio repellat saepe tenetur. Cumque eligendi
            nemo pariatur quae rem repudiandae veniam!
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            aliquam consequuntur cum cupiditate distinctio doloribus dolorum eos
            esse et eveniet ex, exercitationem impedit iste molestiae nam neque
            nobis placeat quis ratione repellendus similique temporibus ut.
            Asperiores autem cupiditate doloribus expedita explicabo fugit
            laborum non tenetur! Consectetur magni minima qui. Ad aspernatur
            consectetur dolor dolorum ea enim eveniet expedita fuga fugit ipsam
            iste, porro quas quasi quibusdam repellat sapiente sed sit soluta
            totam, vel veritatis voluptas voluptate, voluptatem? Amet aperiam
            assumenda blanditiis culpa distinctio fuga illo incidunt inventore
            iusto laudantium, maiores molestias nisi officiis perspiciatis
            placeat praesentium quibusdam quisquam reiciendis saepe sit suscipit
            tempore velit. Beatae dignissimos harum natus omnis quas! Amet,
            pariatur, sit. Accusantium aliquid aspernatur autem distinctio
            doloribus eius esse facere, laboriosam maxime nesciunt nulla
            obcaecati odio placeat praesentium provident qui quo quod
            reprehenderit soluta ut. Ab earum error excepturi laboriosam
            necessitatibus obcaecati odio officiis quas veniam voluptas!
            Dolorum.
          </p>

          <img {...imageAttributes(3)} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, corporis dolorum explicabo illum iure laboriosam
            laudantium necessitatibus nemo non quos reprehenderit repudiandae
            sapiente vel. A asperiores beatae consequatur corporis dignissimos
            eius eligendi eos incidunt ipsam iusto minus molestiae neque nulla
            officia, officiis porro sapiente sint totam? Accusantium aliquam
            animi, aperiam architecto aspernatur atque autem cumque delectus
            dignissimos dolorem doloribus ea earum enim eos error eum
            exercitationem explicabo fugiat in itaque iure laboriosam magni
            nulla, obcaecati odit omnis optio placeat praesentium qui quod
            ratione recusandae tempora unde ut vel vitae voluptates. Dolores eum
            molestiae natus optio pariatur quasi repudiandae ullam voluptatem?
          </p>
        </section>

        <section>
          <h2>Staying ahead of the curve on Google’s Core Web Vitals</h2>

          <img {...imageAttributes(4)} alt="" />

          <p>
            One year. That’s how long Google gave developers to start
            implementing required changes to improve user experience. In early
            May 2020, Google published a modest post on one of its developer
            blogs introducing Core Web Vitals — a set of metrics that will
            result in major changes to the way websites are ranked by the search
            engine.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            accusantium aliquam animi corporis debitis deleniti dolor dolorem
            earum eum maxime nostrum numquam provident, quibusdam quod, soluta
            tempora tempore? Accusantium architecto aspernatur est et facilis
            fugiat, illo inventore laudantium maxime minima molestiae molestias
            mollitia nostrum perferendis quidem sequi tempore ullam vero!
          </p>

          <img {...imageAttributes(5)} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            dolorem eligendi necessitatibus pariatur possimus. Ab amet at
            deserunt dolores doloribus enim exercitationem impedit inventore
            labore magni minima mollitia necessitatibus neque placeat provident,
            quas quisquam reprehenderit veniam. Accusamus, animi dolor dolores
            doloribus eaque facere laborum necessitatibus nemo perspiciatis quod
            quos sunt voluptates voluptatibus? Consequuntur culpa cum libero
            placeat possimus? Commodi eum exercitationem id iure, iusto sint sit
            voluptate. Dolorem, ea, minima?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusantium, ea eligendi incidunt laudantium magni, modi mollitia
            necessitatibus nostrum perferendis repellat repellendus vero
            voluptate? Et eveniet incidunt, iure officiis optio possimus, quas
            qui rem rerum, tempore totam ullam veritatis voluptas. Aliquam iusto
            perferendis quasi! Alias autem blanditiis deleniti dolor dolorum
            ducimus est, in, incidunt ipsa laudantium minus molestiae
            perferendis quasi quibusdam quis, reprehenderit sed soluta suscipit
            voluptas voluptatum? Atque blanditiis commodi consequuntur
            cupiditate deleniti distinctio dolor doloremque ea eaque eligendi
            eum facere illum iusto labore maiores, natus numquam officia quam
            quia quidem quo rem repudiandae sit, sunt suscipit vel velit veniam
            veritatis voluptas voluptatum! Alias architecto dignissimos dolores
            eveniet hic, ipsa laboriosam, magni officiis quas quo similique
            voluptate? Ab aliquid asperiores corporis cum cupiditate delectus
            dolor ea eius eum ex iusto mollitia nisi nobis nostrum numquam,
            obcaecati officia perferendis quam sapiente sunt totam velit veniam
            veritatis voluptatibus voluptatum. Numquam, obcaecati!
          </p>
        </section>

        <section>
          <h2>When Clubhouse Runs Out of Money</h2>

          <img {...imageAttributes(6)} alt="" />

          <p>
            Clubhouse is prodigious. At just over a year old, the exclusive,
            invite-only app still doesn’t have a proper website or even an app
            on more than a single operating system. What it lacks in usability,
            though, the app store chart-topper makes up in celebrity cachet,
            millions of users, and access to a seemingly endless spigot of
            funds.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            atque autem beatae blanditiis commodi consectetur consequatur, dicta
            dolor dolore dolorem doloremque dolorum impedit iusto laborum
            laudantium magnam nam nesciunt nihil nostrum numquam perferendis
            recusandae sapiente sequi vel velit! Aperiam blanditiis consequatur
            cumque dicta dignissimos distinctio dolorum eius error
            exercitationem explicabo facilis molestias natus nihil nostrum odio,
            pariatur perferendis perspiciatis quaerat quis sequi sit sunt
            suscipit voluptatibus! Aperiam at cumque dignissimos distinctio
            dolor doloremque ducimus fuga harum illo iusto molestias, obcaecati
            possimus repellat repudiandae totam ut, veritatis voluptas. Aut
            corporis dolorum, ex explicabo fugit labore molestiae necessitatibus
            nisi quos sequi ut.
          </p>

          <img {...imageAttributes(7)} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            atque aut deleniti dolore earum, enim expedita impedit ipsum
            laudantium magnam neque nisi nobis nostrum pariatur perferendis quis
            quo rem sed soluta sunt suscipit, velit voluptas voluptatibus. Fuga
            libero perspiciatis quam?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium amet aperiam architecto aspernatur beatae, blanditiis
            cupiditate delectus deleniti dolore dolorem earum eos et eveniet ex
            exercitationem fugit laborum nemo omnis perferendis placeat quia
            recusandae repellat repellendus sapiente sint sit tempora ut veniam,
            vero voluptatem. A adipisci amet consequatur ea eveniet hic
            incidunt, inventore molestiae officia pariatur possimus praesentium
            quae quisquam repudiandae rerum, sint voluptatibus. Accusamus
            corporis eligendi libero minus porro provident sit ut veniam?
            Pariatur!
          </p>
        </section>

        <section>
          <h2>
            Reddit users like GameStop stock, but the business is still
            struggling
          </h2>

          <img {...imageAttributes()} alt="" />

          <p>
            The video game retailer's shares are still far higher after
            investors on social media pushed their value up. GameStop's stock
            has risen 948% so far this year, to $180.94, and it has little to do
            with selling video games. It turns out, actually, that the retailer
            at the center of a social media-fueled Wall Street battle over
            GameStop's share value hasn't caused the same enthusiasm for the
            company's brick-and-mortar business.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi
            beatae eius fuga hic magnam minima minus natus, quas sint suscipit
            voluptatem. Alias consequuntur delectus dolorem eius eligendi et,
            explicabo inventore ipsa ipsam magni maxime modi nisi numquam omnis
            quasi quod recusandae rem repellendus sint sunt tempora tempore
            velit veritatis?
          </p>

          <img {...imageAttributes()} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur eveniet incidunt, laborum laudantium libero magnam
            nostrum, officia, omnis quis recusandae voluptas voluptates? A
            accusamus alias aliquid amet asperiores aut autem debitis doloremque
            error eveniet facilis fugiat hic illo iste labore laboriosam
            laudantium maiores minus modi, nisi numquam officiis optio quas
            reiciendis repellendus totam ut vitae! Ab aliquid animi, at atque
            commodi consectetur consequatur culpa doloremque ea eligendi eum
            illo impedit inventore, magnam nisi nostrum nulla perferendis quasi
            quidem quos repudiandae sapiente sed sunt suscipit, unde veritatis
            voluptas! Eligendi explicabo fugit labore libero nobis non quae
            quibusdam, quidem reiciendis. Amet doloremque ipsam rem. Animi culpa
            dolorem eaque fugit iusto qui, sapiente. Adipisci alias aliquam
            aliquid consequatur cumque debitis delectus deleniti dolorum est et
            eveniet excepturi fuga fugit illum maiores maxime modi molestiae
            nostrum obcaecati officia omnis quaerat quas quasi quis ratione
            reiciendis repellat, sit sunt totam unde veritatis voluptate
            voluptatum!
          </p>

          <img {...imageAttributes()} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            aut consequatur distinctio dolore dolores ducimus enim esse
            explicabo laborum libero mollitia necessitatibus nisi nobis nostrum
            nulla quam quibusdam quis repellat reprehenderit repudiandae sequi
            similique sit tempore veritatis, vitae voluptate voluptates!
          </p>
        </section>

        <section>
          <h2>Chrome now instantly captions audio and video on the web</h2>

          <img {...imageAttributes(11)} alt="" />

          <p>
            The accessibility feature was previously exclusive to some Pixel and
            Samsung Galaxy phones. Google is expanding its real-time caption
            feature, Live Captions, from Pixel phones to anyone using a Chrome
            browser, as first spotted by XDA Developers. Live Captions uses
            machine learning to spontaneously create captions for videos or
            audio where none existed before, and making the web that much more
            accessible for anyone who’s deaf or hard of hearing.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque
            delectus dolores ea, enim expedita iure laboriosam libero minima
            nemo nisi non omnis, pariatur provident quaerat quos, sapiente?
            Alias aliquid amet architecto aut blanditiis consequatur error
            excepturi fuga impedit, ipsam ipsum magni nam nemo nihil, pariatur
            qui unde voluptates. Cupiditate doloremque dolores dolorum laborum
            odio rem, saepe? Minus modi, veritatis.
          </p>

          <img {...imageAttributes(12)} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab porro
            praesentium quis repudiandae saepe, totam. Aperiam cupiditate esse
            hic, illum inventore magni nulla sed sint tenetur ullam. Aperiam
            corporis dolorem enim excepturi facere facilis neque officia omnis
            sunt tempore. Debitis exercitationem hic minima mollitia nemo odit,
            quas quidem quisquam suscipit. Aliquid animi assumenda at distinctio
            dolores, dolorum esse eum impedit ipsum iste iusto neque obcaecati
            odit quasi quod recusandae repellat sunt tenetur voluptates
            voluptatibus voluptatum!
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            aperiam consequatur dicta dolorem eaque enim eos excepturi
            exercitationem, facere iure magnam neque numquam reprehenderit
            repudiandae totam vel, vero vitae. Aspernatur ipsa laborum provident
            quaerat, saepe velit vero voluptatum. Aliquam, beatae, et ex illum
            minima minus modi optio quaerat quos repellendus sapiente vel? Alias
            architecto aspernatur doloremque exercitationem, harum labore libero
            magnam molestias mollitia nam nihil optio pariatur reiciendis rem
            repellat soluta temporibus totam voluptas. Dolore harum sequi veniam
            veritatis! Atque cumque enim eveniet fugit repudiandae sint, sunt!
            Ad, amet dignissimos dolore eligendi et excepturi in laboriosam
            magnam magni nostrum quae quas ratione. Fugiat illum ipsum labore
            laborum necessitatibus officiis perspiciatis placeat quaerat
            voluptates voluptatibus! Ad dolorem doloremque minima quibusdam
            repellat.
          </p>
        </section>
      {/if}
    </Tablet>
  </div>
</div>
