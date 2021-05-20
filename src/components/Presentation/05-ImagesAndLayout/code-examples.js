export const imagesNotReservingSpace = `
  <!-- These image tags will not reserve space -->
  <img 
    src="micheile-henderson-_X6wpmJhej0" 
    alt="">
    
  <img 
    src="chris-lejarazu-08wxrVv5rp8" 
    alt="">
`;

export const imagesReservingSpace = `
  <!-- These image tags will reserve space -->
  <img 
    width="1000"
    height="1500"
    src="micheile-henderson-_X6wpmJhej0" 
    alt="">
    
  <img 
    src="chris-lejarazu-08wxrVv5rp8" 
    width="2000"
    height="1699"
    alt="">
`;

export const lazyLoad = `
  <!-- What about lazy loading (no src)? -->
  <img 
    width="1000"
    height="1500"
    alt="">
    
  <img 
    width="2000"
    height="1699"
    alt="">
`;

export const lazyLoadFix = `
  <!-- Load svg with dimensions in viewBox -->
  <img 
    src="data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 1000 1500\\'%3E%3C/svg%3E\"
    width="1000"
    height="1500"
    alt="">
    
  <img 
    src="data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 2000 1699\\'%3E%3C/svg%3E\"
    width="2000"
    height="1699"
    alt="">
`;
export const nativeLazyLoadFix = `
  <!-- Add loading attribute -->
  <img 
    src="micheile-henderson-_X6wpmJhej0" 
    width="1000"
    height="1500"
    loading="lazy"
    alt="">
    
  <img 
    src="chris-lejarazu-08wxrVv5rp8" 
    width="2000"
    height="1699"
    loading="lazy"
    alt="">
`;
