import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {animateScroll} from 'react-scroll';

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])
    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    animateScroll.scrollToTop()
                }}>
                    <Icon IconWidth={'15'} IconHeight={'15'} IconViewBox={"0 0 15 15"}
                          IconId={'buttonToTop'}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: ${theme.colors.title};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`