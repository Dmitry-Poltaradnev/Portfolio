import styled from "styled-components";
import {font} from "../../../styles/Comon";
import {theme} from "../../../styles/Theme";
import BackGround from '../../../assets/img/backFooter.png'

const Main = styled.section`
    min-height: 90vh;
    position: relative;
        &:before {
        transform: rotate(180deg);
        z-index: -100;
        right: 0;
        top: 0;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(${BackGround}) no-repeat center center;
        background-size: cover;
    }
`
const Name = styled.h2`
    ${font({family: 'Roboto, sans-serif', Fmin: 42, Fmax: 58, weight: 700})}
    margin-top: 12px;
`
const MainSubTitle = styled.p`
    font-size: 24px;
    line-height: 36px;
    margin: 32px 0;
`
const MainTitle = styled.h1`
    color: ${theme.colors.accent};
    font-size: 25px;
    font-weight: 700;
    line-height: 27px;
    text-transform: uppercase;
    margin-bottom: 70px;
    p{
        display: none;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 200px;
    object-fit: cover;
    border: 20px solid ${theme.colors.accent};
    @media ${theme.media.maxTablet} {
        width: 300px;
        height: 300px;
    }
`
const MainContent = styled.div`
    max-width: 508px;
    margin: 100px 0;
    padding: 0 15px;
    @media ${theme.media.tablet} {
        margin: 30px 0;
    }
`

const WrapperMain = styled.div`
    position: relative;
    padding: 0;   
`
export const S = {
    Main,
    Name,
    MainSubTitle,
    MainTitle,
    Photo,
    MainContent,
    WrapperMain
}