export const silhouetteShadow = `
  .silhouette-img {
    filter: 
        drop-shadow(
          400px
          10px 
          40px
          hsl(160, 0%, 50%)
        ) 
        invert(1);

      width: 100%;
      max-width: 600px;
      transition: all 1s;
  }

  .silhouette-img.show {
      filter: drop-shadow(
        5px
        10px
        0
        var(--primary-color-60)
      );
      invert(0)
      transition: all 1s;
  }
`;

const position = `position: absolute;
      top: var(--y);
      left: var(--x);
      transform: translate(
          calc(var(--x) * -1),
          calc(var(--y) * -1)
      );
      width: 50%;
      height: 50%;`;

export const blur = `
  .img-filter-box {
      ${position} 
      backdrop-filter: blur(5px);
  }
`;

export const greyscale = `
  .img-filter-box {
      ${position} 
      backdrop-filter: grayscale(1);
  }
`;

export const sepia = `
  .img-filter-box {
      ${position} 
      backdrop-filter: sepia(1);
  }
`;

export const hueRotate = `
  .img-filter-box {
      ${position} 
      backdrop-filter: hue-rotate(90deg);
  }
`;

export const introStep1 = `
  .intro-filters {
      filter: brightness(0);
      transition: filter 1s;
  }
`;

export const introStep2 = `
  .intro-filters {
      filter: brightness(50%);
      transition: filter 1s;
  }
`;

export const introStep3 = `
  .intro-filters {
      filter: 
          brightness(75%) 
          drop-shadow(5px 10px 10px #000);
      transition: filter 1s;
  }
`;

export const introStep4 = `
  .intro-filters {
      filter: 
          brightness(100%)
          drop-shadow(5px 10px 10px #000)
          drop-shadow(15px 15px 15px var(
              --secondary-color-60)
          );
          transition: filter 1s;
  }
`;

export const dollShadows = [
  `
  .shadow-ground {
      width: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      animation: peak 3s;
  }
  
  @keyframes peak {
      0% { transform: translateX(-50%); }
      50% { transform: translateX(-40%); }
      100% { transform: translateX(-50%); }
  }
`,
  `
  .shadow-ground {
      position: absolute;
      top: 41%;
      left: 64%;
      transform: skewX(-58deg);
      height: 56%;
      width: 47%;
  }
`,
  `
  .shadow-ground {
      position: absolute;
      top: 41%;
      left: 64%;
      transform: skewX(-58deg);
      height: 56%;
      width: 47%;
      filter: brightness(0%);
  }
`,
  `
  .shadow-ground {
      position: absolute;
      top: 41%;
      left: 64%;
      transform: skewX(-58deg);
      height: 56%;
      width: 47%;
      filter: brightness(0%) opacity(0.6);
  }
`,
  `
  .shadow-ground {
      position: absolute;
      top: 41%;
      left: 64%;
      transform: skewX(-58deg);
      height: 56%;
      width: 47%;
      filter: brightness(0%) opacity(0.6) blur(10px);
  }
`,
];

export const drinkShadows = [
  `
  .shadow-ground {
      width: 80%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      animation: peak 3s;
  }
  
  @keyframes peak {
      0% { transform: translateX(-50%); }
      50% { transform: translateX(-40%); }
      100% { transform: translateX(-50%); }
  }
`,
  `
  .shadow-ground {
      position: absolute;
      top: 30%;
      left: 58%;
      transform: skewX(-61deg);
      height: 66%;
      width: 64%;
  }
`,
  `
  .shadow-ground {
      position: absolute;
      top: 30%;
      left: 58%;
      transform: skewX(-61deg);
      height: 66%;
      width: 64%;
      filter: brightness(0%);
  }
`,

  `
  .shadow-ground {
      position: absolute;
      top: 30%;
      left: 58%;
      transform: skewX(-61deg);
      height: 66%;
      width: 64%;
      filter: brightness(0%) opacity(0.6);
  }
`,
  `
  .shadow-ground {
      position: absolute;
      top: 30%;
      left: 58%;
      transform: skewX(-61deg);
      height: 66%;
      width: 64%;
      filter: brightness(40%) opacity(0.6) blur(10px);
  }
`,
  `
  .shadow-ground {
      position: absolute;
      top: 30%;
      left: 58%;
      transform: skewX(-61deg);
      height: 66%;
      width: 64%;
      filter: 
          brightness(40%)
          opacity(0.6) 
          blur(10px) 
          drop-shadow(10px 50px 50px rgba(200,200,0, 0.5));
  }
`,
];

export const maskImage = `
  .mask-image {
      mask-image: url(
        /images/varun-gaba-unsplash.png
      );
      -webkit-mask-image: url(
        /images/varun-gaba-unsplash.png
      );

      mask-size: 50%;
      -webkit-mask-size: 50%;

      mask-position-x: calc(
          var(--posX, 50%) * 1%
      );
      -webkit-mask-position-x: calc(
          var(--posX, 50%) * 1%
      );

      mask-position-y: calc(
          var(--posY, 50%) * 1%
      );
      -webkit-mask-position-y: calc(
          var(--posY, 50%) * 1%
      );

      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
  }
`;
