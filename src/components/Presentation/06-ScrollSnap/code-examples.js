function scrollSnap(number) {
  const version = {
    1: {
      background: 'background: #ccc',
    },
    2: {
      scrollArea: 'scroll-snap-type: x mandatory;',
      box: 'scroll-snap-align: center;',
      background: 'background: #ccc',
    },
    3: {
      scrollArea: 'scroll-snap-type: x mandatory;',
      box: 'scroll-snap-align: center;',
      cssVarCircle: '--p: calc(var(--intersect, 0) * 100%);',
      background: `
      background: linear-gradient(
        to top, 
        #000 var(--p, 0%), 
        #ccc var(--p, 0%)
      );`,
    },
    4: {
      scrollArea: 'scroll-snap-type: x mandatory;',
      box: 'scroll-snap-align: center;',
      cssVarCircle: '--p: calc(var(--intersect, 0) * 100%);',
      transform: 'transform: scale(calc(1 - var(--intersect) * 0.05));',
      background: `
      background: linear-gradient(
        to top, 
        #000 var(--p, 0%), 
        #ccc var(--p, 0%)
      ); 
      `,
    },
  };

  return `
  .scroll-area {
      display: flex;
      gap: 1rem;
      width: 100%;
      overflow: auto;
      align-items: flex-start;
      height: fit-content;
      ${version[number]?.scrollArea || ''}
  }
  
  .box {
      aspect-ratio: var(--ratio);
      flex: 0 0 100%; 
      ${version[number]?.box || ''}
  }
  
  .box img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: 50% 75%;
      ${version[number]?.transform || ''}
  }
  
  .indicators {
      display: flex;
      justify-content: center;
      gap: 0.5em;
      padding: 0.5em;
  }
  
  .circle {
      ${version[number]?.cssVarCircle || ''}
      height: 20px;
      width: 20px;
      border-radius: 50%;
      ${version[number]?.background || ''}
  }
  `;
}

export const scrollSnap1 = scrollSnap(1);
export const scrollSnap2 = scrollSnap(2);
export const scrollSnap3 = scrollSnap(3);
export const scrollSnap4 = scrollSnap(4);

export const scrollAreaHtml = `
<div>
  <div class="scroll-area" style="--ratio: 3/4;">
    <div class='box'>
      <img src="/images/peter-thomas-unsplash.jpg" />
    </div>
    <div class='box'>
      <img src="/images/anita-austvika-unsplash.jpg" />
    </div>
    <div class='box'>
      <img src="/images/pascal-debrunner-unsplash.jpg" />
    </div>
    <div class='box'>
      <img src="/images/clay-banks-unsplash.jpg" />
    </div>
    <div class='box'>
      <img src="/images/neom-unsplash.jpg" />
    </div>
    <div class='box'>
      <img src="/images/the-fry-family-food-unsplash.jpg" />
    </div>
  </div> 
  
  <div class='indicators'>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
  </div>
</div>
`;
