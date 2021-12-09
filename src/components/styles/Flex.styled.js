import styled from "styled-components";

export const Flex = styled.div `
    display: flex;
    align-items: center;
    flex-direction: ${({direction}) => direction};

    & > div,
    & > ul {
        flex: 1;
    }
`