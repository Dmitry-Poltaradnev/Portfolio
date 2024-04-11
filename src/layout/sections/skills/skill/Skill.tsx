import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Skills_Styles'

type  SkillPropsType = {
    IconId: string,
    title: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper align={'center'} direction={'column'}>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <Icon IconId={props.IconId}/>
            </FlexWrapper>
        </S.Skill>
    );
};


