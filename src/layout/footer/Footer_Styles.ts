import styled from "styled-components";
import BackGround from '../../assets/img/backFooter.png'

const Footer = styled.footer`
`
const SocialList = styled.ul`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
`
const SocialItem = styled.li`
    
`

const Copyright = styled.small`
    font-size: 16px;
    line-height: 22px;
    display: flex;
    z-index: 10;
    margin-bottom: 80px;
`

const WrapperFooter = styled.div`
    position: relative;
    padding: 0;

    &:before {
        z-index: -100;
        right: 0;
        bottom: 0;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(${BackGround}) no-repeat center center;
        background-size: cover;
    }
`
export const S = {
    Footer,
    SocialList,
    SocialItem,
    Copyright,
    WrapperFooter
}