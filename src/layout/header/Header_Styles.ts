import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`    
`;

const Link = styled.a`
    color: ${theme.colors.title};
    font-family: 'Comfortaa', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 180%;
    @media ${theme.media.tablet}{
        display: none;       
    }   
`;

export const S = {
    Header,
    Link,
}