export const root = `
  :root {
    --hue: 269;
    --satMod: 0.01;
    --lightMod: 0.6;
    --borderRadius: 20px;
    --code-font-size: 1.3rem;
  }
`;

export const awesomeBtn = `
  .awesome-btn {
      border: none;
      padding: 2rem;
      margin: 1rem;
      color: white;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2rem; 
      font-size: 1.2rem;
     
     
      border-radius: var(--borderRadius, 5px);
  
      background: hsl(
        var(--hue), 
        calc(50% * var(--satMod)), 
        calc(50% * var(--lightMod))
      );
  }
`;

export const createBtn = `
  <button 
    class='awesome-btn' 
    style='--hue: 360; --satMod: 1; --lightMod: 1;'
  >
    New button
  <button>
`;

export const commonUse = `
    :root {
        --primary: 267, 89%;
        --primary-color-10: hsla(var(--primary), 10%, 1);
        --primary-color-20: hsla(var(--primary), 20%, 1);
        --primary-color-30: hsla(var(--primary), 30%, 1);
        --primary-color-40: hsla(var(--primary), 40%, 1);
        --primary-color-50: hsla(var(--primary), 50%, 1);
        --primary-color-60: hsla(var(--primary), 60%, 1);
        --primary-color-70: hsla(var(--primary), 70%, 1);
        --primary-color-80: hsla(var(--primary), 80%, 1);
        --primary-color-90: hsla(var(--primary), 90%, 1);
        
        --secondary: 335, 89%;
        --secondary-color-10: hsla(var(--secondary), 10%, 1);
        --secondary-color-20: hsla(var(--secondary), 20%, 1);
        --secondary-color-30: hsla(var(--secondary), 30%, 1);
        --secondary-color-40: hsla(var(--secondary), 40%, 1);
        --secondary-color-50: hsla(var(--secondary), 50%, 1);
        --secondary-color-60: hsla(var(--secondary), 60%, 1);
        --secondary-color-70: hsla(var(--secondary), 70%, 1);
        --secondary-color-80: hsla(var(--secondary), 80%, 1);
        --secondary-color-90: hsla(var(--secondary), 90%, 1);
    }
`;
