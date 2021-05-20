const shared = `
    .header {
        grid-area: top;
    }

    .sideA  {
        grid-area: sideA;
    }

    .sideB  {
        grid-area: sideB;
    }

    .content  {
        grid-area: content;
    }

    .footer  {
        grid-area: footer;
    }
`;

export const gridAreasOne = `
    .grid-areas.one {
        display: grid;
        grid-gap: 0.25rem;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 1fr 3fr 2fr 1fr;
        grid-template-areas:
            "top top top"
            "sideA content sideB"
            "sideA content sideB"
            "footer footer sideB";
    }

    ${shared}
`;

export const gridAreasTwo = `
    .grid-areas.two {
        display: grid;
        grid-gap: 0.25rem;
        grid-template-columns: 3fr 2fr;
        grid-template-rows: 1fr 3fr 2fr 1fr;
        grid-template-areas:
            "top top"
            "content sideA"
            "sideB sideA"
            "footer footer";
    }

    ${shared}
`;

export const gridAreasThree = `
    .grid-areas.three {
        display: grid;
        grid-gap: 0.25rem;
        grid-template-columns: 2fr 2fr;
        grid-template-rows: 1fr 3fr 2fr 1fr;
        grid-template-areas:
            "top top"
            "content content"
            "sideA sideB"
            "footer footer";
    }

    ${shared}
`;

export const repeatOne = `
    .repeat {
        width: 100%;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));
    }
`;

export const repeatTwo = `
    .repeat {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    
    .repeat .card {
        min-width: 40ch;
        flex: 1;
        margin: 0.5rem;
    }
`;

export const repeatThree = `
    .repeat {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    
    .repeat .card {
        flex: 1 1 100%;
        padding: 0.5rem;
        box-sizing: border-box;
        min-width: 40ch;
    }
    
    @media screen and (min-width: 460px) {
        .repeatable.one .card {
            flex: 1 1 calc(100% / 1);
        }
    } 

    @media screen and (min-width: 640px) {
        .repeat .card {
            flex: 1 1 calc(100% / 2);
        }
    } 
    
    @media screen and (min-width: 768px) {
        .repeat .card {
            flex: 1 1 calc(100% / 3);
        }
    } 
    
    @media screen and (min-width: 1366px) {
        .repeat .card {
            flex: 1 1 calc(100% / 4);
        }
    } 
`;

export function getGridlinesCss(cols, rows) {
  return `
    .gridlines {
        display: grid;
        grid-template-columns: repeat(${cols}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
    }
    
    .gridlines .one {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
    
    .gridlines .two {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
    `;
}
