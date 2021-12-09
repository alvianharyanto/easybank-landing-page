import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Logo from '../Logo';
import {
    StyledNav,
    NavContainer,
    MobileMenu,
    NavMenu,
    NavMenuWrapper,
    NavItems,
    NavLink,
    NavButton
} from './styles/Nav.styled';

export default function Nav () {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <StyledNav>
            <NavContainer>
                <Logo />
                <MobileMenu onClick={handleClick}>
                    {click ? <img src='/images/icon-close.svg' alt='icon menu' /> : <img src='/images/icon-hamburger.svg' alt='icon menu' />}
                </MobileMenu>
                <NavMenu onClick={handleClick} click={click}>
                    <NavMenuWrapper>
                        <Router>
                            <NavItems>
                                <NavLink to='/'>Home</NavLink>
                            </NavItems>
                            <NavItems>
                                <NavLink to='/'>About</NavLink>
                            </NavItems>
                            <NavItems>
                                <NavLink to='/'>Contact</NavLink>
                            </NavItems>
                            <NavItems>
                                <NavLink to='/'>Blog</NavLink>
                            </NavItems>
                            <NavItems>
                                <NavLink to='/'>Careers</NavLink>
                            </NavItems>
                        </Router>
                    </NavMenuWrapper>
                </NavMenu>
                <NavButton>
                    Request Invite
                </NavButton>
            </NavContainer>
        </StyledNav>
    )
}
