import styled from "styled-components";

export const StyledMain = styled.main `
    text-align: center;

    @media screen and (min-width: 480px) {
        text-align: left;
    }
`

export const Section = styled.section `
    background: ${({bg}) => bg};
    padding: 5rem 0;
`

