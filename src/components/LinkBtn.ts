import styled from "styled-components";
import {theme} from "../styles/Theme";

type LinkBtn  = {
    borderRadius?:string,
}


export const LinkBtn = styled.a<LinkBtn>`
    border-radius: ${props => props.borderRadius || '8px'};
    color: ${theme.colors.title};
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    border: 2px solid ${theme.colors.title};
    padding: 8px 24px 8px 24px;
    transition: ${theme.animation.transition};
    &:hover {
        background-color: ${theme.colors.accent};
        border: 2px solid ${theme.colors.accent};
    }
    @media ${theme.media.maxTablet} {
        &:hover{
            background-color: transparent;
            border: 2px solid ${theme.colors.title};
            cursor: default;
        }
    }
`