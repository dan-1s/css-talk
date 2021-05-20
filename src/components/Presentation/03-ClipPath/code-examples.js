export const pentagon = `
   .clip-path-img-a {
      clip-path: polygon(
        50% 0%,
        100% 38%,
        82% 100%,
        18% 100%,
        0% 38%
      );
   }
`;

export const star = `
   .clip-path-img-a {
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }
`;

export const triangle = `
   .clip-path-img-a {
      clip-path: polygon(
        50% 0%,
        0% 100%,
        100% 100%
      );
   }
`;

export const arrow = `
  .clip-path-img-a {
    clip-path: polygon(
      0% 20%,
      60% 20%,
      60% 0%,
      100% 50%,
      60% 100%,
      60% 80%,
      0% 80%
    );
  }
`;

export const animationA = `
  @keyframes morph {
    0% {
      clip-path: polygon(
        50% 0%,
        0% 100%,
        100% 100%
      );
    }

    33% {
      clip-path: polygon(
        50% 50%,
        0% 100%,
        100% 100%
      );
    }

    66% {
      clip-path: polygon(
        0% 100%,
        0% 50%,
        100% 100%
      );
    }

    100% {
      clip-path: polygon(
        50% 0%,
        0% 100%,
        100% 100%
      );
    }
  }
  
  .clip-path-img-animate-a {
    animation: morph 5s infinite;
  }
`;

export const animationB = `
  @keyframes morph {
    0% {
      clip-path: polygon(
        50% 0%,
        75% 18%,
        98% 35%,
        88% 67%,
        79% 91%,
        49% 91%,
        21% 91%,
        12% 64%,
        2% 35%,
        24% 19%
      );
    }

    33% {
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }

    66% {
      clip-path: polygon(
        50% 0%,
        100% 0,
        100% 35%,
        100% 66%,
        100% 100%,
        48% 100%,
        0 100%,
        0 68%,
        0 35%,
        0 0
      );
    }

    100% {
      clip-path: polygon(
        50% 0%,
        75% 18%,
        98% 35%,
        88% 67%,
        79% 91%,
        49% 91%,
        21% 91%,
        12% 64%,
        2% 35%,
        24% 19%
      );
    }
  }
  
  .clip-path-img-animate-b {
    animation: morph 5s infinite;
  }
`;

export const pathOutside = `
  .img-shape-outside {
    float: right;
    width: 100%;
    height: auto;
    shape-outside: polygon(
      35% 14%,
      34% 21%,
      46% 28%,
      38% 32%,
      42% 36%,
      25% 40%,
      25% 48%,
      38% 48%,
      48% 53%,
      48% 59%,
      61% 63%,
      60% 82%,
      37% 85%,
      37% 100%,
      100% 100%,
      100% 0,
      44% 0,
      44% 14%
    );
  }
`;

export const revealCode = `
  .reveal-container {
    position: relative;
  }

  .front-img {
    position: absolute;
    width: 100%;
  }

  .back-img {
    width: 100%;
    clip-path: circle(0%);
    transition: clip-path 1.5s;
  }

  .show-back-img {
    clip-path: circle(100%);
    transition: clip-path 1.5s;
  }
`;
