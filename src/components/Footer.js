import {BrowserRouter as Router} from 'react-router-dom'
import {Flex} from './styles/Flex.styled';
import {FooterStyled, FooterLeft, FooterContainer, FooterLink} from './styles/Footer.styled';
import {Button} from './styles/Button.styled';
import Logo from '../Logo.js';

export default function Footer() {
    return (
        <FooterStyled>
            <FooterContainer>
                <FooterLeft>
                    <Flex direction='column'>
                    <Logo color='white'/>
                    <ul>
                        <Router>
                            <li><FooterLink to="#"><img src='/images/icon-facebook.svg' alt='facebook'/></FooterLink></li>
                            <li><FooterLink to="#"><img src='/images/icon-youtube.svg' alt='youtube'/></FooterLink></li>
                            <li><FooterLink to="#"><img src='/images/icon-twitter.svg' alt='twitter'/></FooterLink></li>
                            <li><FooterLink to="#"><img src='/images/icon-pinterest.svg' alt='pinterest'/></FooterLink></li>
                            <li><FooterLink to="#"><img src='/images/icon-instagram.svg' alt='instagram'/></FooterLink></li>
                        </Router>
                    </ul>
                    </Flex>
                    <Flex direction='column'>
                        <Router>
                            <FooterLink to="#">About Us</FooterLink>
                            <FooterLink to="#">Contact</FooterLink>
                            <FooterLink to="#">Blog</FooterLink>
                        </Router>
                    </Flex>
                    <Flex direction='column'>
                        <Router>
                            <FooterLink to="#">Careers</FooterLink>
                            <FooterLink to="#">Support</FooterLink>
                            <FooterLink to="#">Privasy Police</FooterLink>
                        </Router>
                    </Flex>
                </FooterLeft>
                <Flex direction='column'>
                    <Button>
                        Request Invite
                    </Button>
                    <p>© Easybank. All Rights Reserved</p>
                </Flex>
            </FooterContainer>
        </FooterStyled>
    )
}