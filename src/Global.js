import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

    html {
        box-sizing: border-box;
        font-size: 18px;
    }

      *, *::before, *::after {
        box-sizing: inherit;
    }

    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: 'Public Sans', sans-serif;
        color: ${({theme}) => theme.colors.grayish};
        background: ${({theme}) => theme.colors.grey};
        font-weight: ${({theme}) => theme.fonts.regular};
    }

    h1,
    h2,
    h3,
    p,
    ul {
        margin: 0;
        padding: 0;
    }

    p {
        font-size: .75em;
        line-height: 25px;
    }

    h1, h2, h3 {
        color: ${({theme}) => theme.colors.darkBlue};
        font-weight: ${({theme}) => theme.fonts.regular};
        line-height: 1.3em;
        font-size: 1.6em;
        margin: 15px 0;
    }
`

export default GlobalStyles