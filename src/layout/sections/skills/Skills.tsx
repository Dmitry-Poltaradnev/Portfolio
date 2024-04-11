import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles'

const skillData = [
    {
        IconId: 'vsCodeSvg',
        title: 'VS Code'
    },
    {
        IconId: 'jsSvg',
        title: 'JS'
    },
    {
        IconId: 'html',
        title: 'HTML'
    },
    {
        IconId: 'css',
        title: 'CSS'
    },
    {
        IconId: 'redux',
        title: 'Redux'
    },
    {
        IconId: 'sass',
        title: 'SASS'
    },
    {
        IconId: 'react',
        title: 'React'
    },
    {
        IconId: 'git',
        title: 'GIT'
    },
    {
        IconId: 'github',
        title: 'GitHub'
    },
    {
        IconId: 'styledComponents',
        title: 'styled components'
    },

]
export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'center'}>
                    {skillData.map((item, index) => {
                        return <Skill key={index} IconId={item.IconId} title={item.title}></Skill>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

