import styled from "styled-components";

export const Button = styled.button `
    background: rgb(50,205,121);
    background: linear-gradient(104deg, rgba(50,205,121,1) 0%, rgba(43,187,204,1) 100%);
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: .9em;
    font-weight: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.white};
    padding: 10px 35px;
    margin: 30px 0;

    &:hover {
        opacity: 70%;
    }
`