import styled from 'styled-components';
import Container from './Container.styled';

export const StyledHeader = styled.header `
    background-image: url(/images/bg-intro-mobile.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -5rem;

    @media screen and (min-width: 480px) {
        background-image: url(/images/bg-intro-desktop.svg);
        background-position: 37rem -14rem;
        background-size: 85%;
        overflow-x: clip;

    }
`

export const HeaderContainer = styled(Container) `
    ${Container};
    @media screen and (min-width: 480px) {
        display: flex;
        flex-direction: row-reverse;
        height: 35rem;
    }
`

export const HeaderMockup = styled.div `

    & img {
        width: 100%;
        margin-top: -140px;

    }

    @media screen and (min-width: 480px) {
        flex-basis: 80rem;
        margin-right: -54rem;

        & img {
            width: 50%;
            margin-top: -110px;
        }
    }

`

export const HeaderIntro = styled.div `
    padding: 1rem;
    text-align: center;

    & h1 {
        font-size: 2em;
    }

    @media screen and (min-width: 480px) {
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-right: auto;
        flex-basis: 20rem;
    }
`
