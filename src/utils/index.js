export function generateId() {
  // Risk of collision should low enough for my use case
  return Math.random().toString(36).substr(2, 9);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function createImagePicker() {
  const images = [
    {
      name: 'adam-kool-unsplash.jpg',
      width: '2000',
      height: '1333',
    },
    {
      name: 'ali-karimi-unsplash.jpg',
      width: '1000',
      height: '1500',
    },
    {
      name: 'chris-lejarazu-unsplash.jpg',
      width: '2000',
      height: '1699',
    },
    {
      name: 'chrissa-giannakoudi-unsplash.jpg',
      width: '1126',
      height: '1500',
    },
    {
      name: 'dan-asaki-unsplash.jpg',
      width: '1200',
      height: '1500',
    },
    {
      name: 'eberhard-grossgasteiger-unsplash.jpg',
      width: '998',
      height: '1500',
    },
    {
      name: 'guillaume-issaly-unsplash.jpg',
      width: '1113',
      height: '1500',
    },
    {
      name: 'micheile-henderson-unsplash.jpg',
      width: '1000',
      height: '1500',
    },
    {
      name: 'rodion-kutsaev-unsplash.jpg',
      width: '1000',
      height: '1500',
    },
    {
      name: 'thom-holmes-unsplash.jpg',
      width: '1200',
      height: '1500',
    },
    {
      name: 'willian-justen-de-vasconcellos-unsplash.jpg',
      width: '1040',
      height: '1500',
    },
  ];

  let index = 0;
  shuffleArray(images);

  return function pickImage() {
    if (index >= images.length) {
      index = 0;
    }

    const pick = images[index];
    index += 1;

    return pick;
  };
}
