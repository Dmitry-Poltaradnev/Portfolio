import styled from "styled-components";

type ContainerPropsType = {
    padding?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1230px;
    width: 100%;
    padding: ${props => props.padding || '0px 15px'};
    margin: 0 auto;
`

