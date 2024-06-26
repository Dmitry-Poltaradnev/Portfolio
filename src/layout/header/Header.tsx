import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 769;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <S.Link target={'_blank'} href="https://github.com/Dmitry-Poltaradnev">Dzmitry Paltaradneu</S.Link>
                    {width < breakpoint ? <MobileMenu/> : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


