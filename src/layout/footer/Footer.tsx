import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {S} from './Footer_Styles'
import {FooterIcon} from "../../components/icon/FooterIcon";

const socialItemData = [
    {
        UrlIcon: 'https://www.instagram.com/accounts/login/',
        IconId: 'instagramm'
    },
    {
        UrlIcon: 'https://mail.google.com/',
        IconId: 'mail'
    },
    {
        UrlIcon: 'https://web.telegram.org/k/',
        IconId: 'telegramm'
    },
    {
        UrlIcon: 'https://www.linkedin.com/',
        IconId: 'linkedin'
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container padding={'0px 0px'}>
                <S.WrapperFooter>
                    <FlexWrapper direction={'column'} align={'center'} justify={'flex-start'}>
                        <S.SocialList>
                            {socialItemData.map((item, index) => {
                                return <S.SocialItem key={index}>
                                    <FooterIcon IconId={item.IconId} UrlIcon={item.UrlIcon}/>
                                </S.SocialItem>
                            })}
                        </S.SocialList>
                        <S.Copyright>Dzmitry Paltardneu 2024</S.Copyright>
                    </FlexWrapper>
                </S.WrapperFooter>
            </Container>
        </S.Footer>
    );
};

