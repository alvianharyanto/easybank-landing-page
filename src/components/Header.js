import { StyledHeader, HeaderContainer, HeaderMockup, HeaderIntro } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
    return (
        <StyledHeader>
            <HeaderContainer>
                <HeaderMockup>
                    <img src='/images/image-mockups.png' alt='mockups' />
                </HeaderMockup>
                <HeaderIntro>
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button>
                        Request Invite
                    </Button>
                </HeaderIntro>
            </HeaderContainer>
        </StyledHeader>
    )
}