import styled from "styled-components";
import {theme} from "../styles/Theme";

type FlexWrapperPropsType = {
    justify?: string,
    direction?: string,
    wrap?: string,
    align?: string,
    gap?: string;
    margin?:string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || '0px'};
    height: 100%;
    margin-top: ${props => props.margin || "0px"};

    @media ${theme.media.mobile} {
        flex-direction: ${props => props.direction || "column-reverse"};     
    }
`