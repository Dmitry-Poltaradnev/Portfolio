import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skill = styled.div`
    margin: 20px 40px;
    @media ${theme.media.tablet} {
        margin: 30px 20px;
    }
`
const SkillTitle = styled.h3`
    color: ${theme.colors.title};
    font-size: 30px;
    font-weight: 700;
    line-height: 180%;
`
const Skills = styled.section`
`
export  const  S = {
    Skill,
    SkillTitle,
    Skills
}