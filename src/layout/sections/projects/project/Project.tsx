import React from 'react';
import {LinkBtn} from "../../../../components/LinkBtn";
import {BtnsWrapper} from '../../../../components/BtnsWrapper';
import {S} from '../Projects_Styles'

type ProjectPropsType = {
    projectName: string,
    description: string,
    linkCode: string,
    linkDemo: string,
    imageProject: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ProjectWrapper>
                <S.ProjectContent>
                    <S.ProjectName>{props.projectName} </S.ProjectName>
                    <S.ProjectDescription>
                        {props.description}
                    </S.ProjectDescription>
                    <BtnsWrapper>
                        <LinkBtn target={'_blank'} borderRadius={'24px'} href={props.linkDemo}>Demo</LinkBtn>
                        <LinkBtn target={'_blank'} borderRadius={'24px'} href={props.linkCode}>Code</LinkBtn>
                    </BtnsWrapper>
                </S.ProjectContent>
                <S.ImageWrapper>
                    <S.ProjectImage src={props.imageProject} alt={'projectImg'}/>
                </S.ImageWrapper>
            </S.ProjectWrapper>
        </S.Project>
    );
};




