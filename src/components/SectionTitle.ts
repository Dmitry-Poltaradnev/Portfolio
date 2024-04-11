import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    color: ${theme.colors.title};
    font-family: Playfair, sans-serif;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    position: relative;
    margin: 4px 0;
    line-height: 1.4;
    margin-bottom: 20px;

    &::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 4px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${theme.colors.accent};
    }
    
`