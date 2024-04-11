import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";

// Desktop
const NavLink = styled(Link)<{ isOpen?: boolean }>`
    font-family: 'Raleway', 'sans-serif';
    font-weight: 600;
    line-height: 28px;
    color: ${theme.colors.title};
    font-size: 30px;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        bottom: 0;
        display: block;
        width: 0;
        transition: ${theme.animation.transition};
        height: 2px;
        background: ${theme.colors.title};
        left: 50%;
        transform: translateX(-50%);
    }

    &:hover:after {
        width: 100%;
    }

    @media ${theme.media.tablet} {
        &::after {
            display: none;
        }
    }

`
const ListItem = styled.li`    
`
const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 48px;
        justify-content: center;
        margin: 20px 0;
    }
`

// Mobile
const StyledMobileMenu = styled.nav`
`

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${theme.colors.accent};
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 1s ease;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        justify-content: center;
        margin: 20px 0;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);

        & ul {
            gap: 80px;
            transition: ${theme.animation.transition};
            & a {
                font-size: 40px;
            }
        }
    `}
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    display: block;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 20px;
    right: 15px;
    z-index: 1000;

    span {
        display: block;
        position: absolute;
        background-color: ${theme.colors.title};
        width: 36px;
        height: 2px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
    }

    &::before {
        content: '';
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.title};
        position: absolute;
        transform: translateY(-10px);
        transition: ${theme.animation.transition};
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: translateY(0) rotate(-45deg);
        `}
    }

    &::after {
        content: '';
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.title};
        position: absolute;
        transform: translateY(10px);
        transition: ${theme.animation.transition};
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: translateY(0) rotate(45deg);
        `}
    }
`

export const S = {
    NavLink,
    ListItem,
    StyledDesktopMenu,
    StyledMobileMenu,
    MobileMenuWrapper,
    BurgerButton
}