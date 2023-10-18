export const imagesNotReservingSpace = `
  <!-- These image tags will not reserve space -->
  <img 
    src="micheile-henderson-unsplash.jpg"
    alt="">
    
  <img 
    src="chris-lejarazu-unsplash.jpg"
    alt="">
`;

export const imagesReservingSpace = `
  <!-- These image tags will reserve space -->
  <img 
    width="1000"
    height="1500"
    src="micheile-henderson-unsplash.jpg"
    alt="">
    
  <img 
    width="2000"
    height="1699"
    src="chris-lejarazu-unsplash.jpg"
    alt="">
`;

export const withLazyLoading = `
  <!-- These image tags will reserve space -->
  <img 
    width="1000"
    height="1500"
    loading="lazy"
    src="micheile-henderson-unsplash.jpg"
    alt="">
    
  <img 
    width="2000"
    height="1699"
    loading="lazy"
    src="chris-lejarazu-unsplash.jpg"
    alt="">
`;

export const aspectRatioBox = `
  .box {
    width: 100%;
    height: auto;
    aspect-ratio: var(--ratio);
    grid-column: var(--grid-col);
  }
`;

export const htmlBoxes = `
  <div
    class="box"
    style="
      --ratio: 1/1;
      --grid-col: 1 / var(--col-end, 3);
    "
  >
    <span>
      Box 1
    </span>
  </div>
`;
