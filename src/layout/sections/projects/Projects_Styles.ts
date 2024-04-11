import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Projects = styled.section`
`
const Project = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 30px;
`
const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
        align-items: center;
    }
`
const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    max-width: 407px;
    margin: 0 auto;
    @media ${theme.media.maxTablet} {
        margin: 20px;
    }
`

const ProjectName = styled.h3`
    font-family: Playfair, sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 150%;
`
const ProjectDescription = styled.p`
    font-size: 18px;
    line-height: 150%;
`
const ImageWrapper = styled.div`
    position: relative;
    width: 50%;
    @media ${theme.media.tablet} {
        width: 100%;
    }
`

const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
`

export const S = {
    Projects,
    Project,
    ProjectWrapper,
    ProjectContent,
    ProjectName,
    ProjectDescription,
    ImageWrapper,
    ProjectImage
}