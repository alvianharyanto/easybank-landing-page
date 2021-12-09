import styled from "styled-components";
import Container from './Container.styled';
import {Link} from 'react-router-dom';
import {Button} from './Button.styled';

export const StyledNav = styled.nav `
    background: ${({theme}) => theme.colors.white};
    position: sticky;
    top: 0;
    z-index: 1000;
`

export const NavContainer = styled(Container) `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    ${Container};

    @media screen and (min-width: 480px) {
        height: 70px;
    }
`

export const MobileMenu = styled.div `
    display: block;
    cursor: pointer;
    width: 20px;
    height: 20px;

    @media screen and (min-width: 480px) {
        display: none;
    }
`

export const NavMenu = styled.div `
    background: rgb(45,49,78);
    background: linear-gradient(0deg, rgba(45,49,78,0) 0%, rgba(45,49,78,1) 100%);
    position: absolute;
    padding-top: 35px;
    left: 0;
    top: 3rem;
    width: 100vw;
    height: 80vh;
    display: ${({click}) => (click ? 'flex' : 'none')};
    justify-content: center;
    align-items: flex-start;
    transition: all 0.5s ease;

    @media screen and (min-width: 480px) {
        display: flex;
        position: relative;
        width: auto;
        height: 70px;
        background: transparent;
        padding-top: 0;
        top:0;
    }

`

export const NavMenuWrapper = styled.ul `
    display: flex;
    position: relative;
    background: ${({theme}) => theme.colors.white};
    width: 85%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    list-style: none;
    border-radius: 5px;

    @media screen and (min-width: 480px) {
        flex-direction: row;
        padding: 0;
        height: 100%;
        widht: auto;
    }
`

export const NavItems = styled.li `
    @media screen and (min-width: 480px) {
        height: 100%;
    }

`

export const NavLink = styled(Link) `
    color: ${({theme}) => theme.colors.darkBlue};
    text-decoration: none;

    @media screen and (min-width: 480px) {
        font-size: 0.9rem;
        color: ${({theme}) => theme.colors.grayish};
        height: 100%;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;

        &:hover {
            color: ${({theme}) => theme.colors.darkBlue};
            border-bottom: 3px solid ${({theme}) => theme.colors.lime};
        }
    }
`

export const NavButton = styled(Button) `
    ${Button};
    display: none;

    @media screen and (min-width: 480px) {
        display: block;
        margin: 0;
    }
`