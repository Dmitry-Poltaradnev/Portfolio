import React from 'react';
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {LinkBtn} from "../../../components/LinkBtn";
import {BtnsWrapper} from "../../../components/BtnsWrapper";

import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

import {S} from "./Main_Styles"


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container padding={'0px 0px'}>
                <S.WrapperMain>
                    <FlexWrapper align={"center"} justify={'space-around'} gap={'80px'} wrap={'wrap'}>
                        <S.MainContent>
                            <S.Name>Hello, my name is <span>Dzmitry Poltaradneu</span></S.Name>
                            <S.MainSubTitle>Short text with details about you, what you do or your professional career.
                                You
                                can
                                add more
                                information
                                on the about page.</S.MainSubTitle>
                            <S.MainTitle>
                                <p>A Fronted Developer</p>
                                <Typewriter
                                    options={{
                                        strings: ['Fronted Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </S.MainTitle>
                            <BtnsWrapper>
                                <LinkBtn target={'_blank'}
                                         href='https://github.com/Dmitry-Poltaradnev'>Projects</LinkBtn>
                                <LinkBtn target={'_blank'}
                                         href='https://www.linkedin.com/in/dzmitrypaltaradneu/'>LinkedIn</LinkBtn>
                            </BtnsWrapper>
                        </S.MainContent>
                        <Tilt glareBorderRadius="50px" tiltReverse={true}>
                            <div>
                                <S.Photo src={photo} alt="photo"/>
                            </div>
                        </Tilt>
                    </FlexWrapper>
                </S.WrapperMain>
            </Container>
        </S.Main>
    );
};




