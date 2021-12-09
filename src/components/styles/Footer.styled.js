import styled from 'styled-components';
import Container from './Container.styled';
import {Link} from 'react-router-dom';

export const FooterStyled = styled.footer`
    background: ${({theme}) => theme.colors.darkBlue};
    display: flex;
    justify-content: center;

    & ul {
        display: flex;
        list-style: none;
        margin: 1.5rem 0;

        & li {
            margin: 0 10px;
        }
    }
`

export const FooterLink = styled(Link) `
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    margin: .7em 0;

    &:hover {
        color: ${({theme}) => theme.colors.lime};
    }
`

export const FooterContainer = styled(Container) `
    ${Container};
    padding: 3rem 0;

    @media screen and (min-width: 480px) {
        display: flex;
        align-items: center;

        & > * {
            flex: 2 1 0;
            align-items: end;
        }
    }
`

export const FooterLeft = styled.div `

    @media screen and (min-width: 480px) {
        display: flex;
        gap: 2rem;

        & > * {
            flex: 2 1 0;
        }
    }
`