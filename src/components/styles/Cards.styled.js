import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledCards = styled.div `
    margin: 1.6rem 0;

    & h3 {
        font-size: 1.2em;
    }

    @media screen and (min-width: 480px) {
        display: flex;
        gap: 2rem;

    }
`

export const CardLink = styled(Link) `
    text-decoration: none;
    color: ${({theme}) => theme.colors.darkBlue};

    &:hover {
        color: ${({theme}) => theme.colors.lime};
    }
`

export const Card = styled.div `
    margin: 1.6rem 0;
`

// article content styled
export const Article = styled.article `
    overflow: hidden;
    border-radius: 5px;
    text-align: left;
    margin-bottom: 1rem;

`

export const ArticleImg = styled.div `
    overflow: hidden;
    max-height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 100%;
    }
`

export const ArticleBody = styled.div `
    padding: 1.7rem;
    font-size: 14px;

    & h3 {
        margin: 14px 0;
        font-size: 1em;
    }

    & p {
        line-height: 18px;
        font-size: .8em
    }
`