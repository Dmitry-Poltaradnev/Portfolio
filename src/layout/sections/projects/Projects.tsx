import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import DogShelterImg from '../../../assets/img/Dog_shelter.webp'
import PhotographerImg from '../../../assets/img/photographer.webp'
import CoffeeHouseImg from '../../../assets/img/Coffee.webp'
import {Container} from "../../../components/Container";
import {S} from './Projects_Styles'


const projectData = [
    {
        projectName: "Dog Shelter",
        description: 'I made this project was created using HTML CSS JS technologies, custom pagination, slider and pop-up windows were also written for this landing page.',
        imageProject: DogShelterImg,
        linkCode: 'https://github.com/Dmitry-Poltaradnev/DogShelter-landing-page',
        linkDemo: 'https://dmitry-poltaradnev.github.io/DogShelter-landing-page/'
    },
    {
        projectName: "Photographer",
        description: 'I made this project was created using HTML CSS JS technologies, it was my first landing',
        imageProject: PhotographerImg,
        linkCode: 'https://github.com/Dmitry-Poltaradnev/photographer-landing-page',
        linkDemo: 'https://dmitry-poltaradnev.github.io/photographer-landing-page/'
    },
    {
        projectName: "Coffee House",
        description: 'I made this project was created using HTML CSS JS technologies, custom pagination, slider and pop-up windows were also written for this landing page.',
        imageProject: CoffeeHouseImg,
        linkCode: 'https://github.com/Dmitry-Poltaradnev/Coffee_House',
        linkDemo: 'https://dmitry-poltaradnev.github.io/Coffee_House/'
    },
]
export const Projects: React.FC = () => {
    return (
        <S.Projects id={'projects'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper gap={'40px'} direction={'column'} align={'flex-start'} margin={'60px'}>
                    {projectData.map((item, index) => {
                        return <Project projectName={item.projectName} description={item.description}
                                        imageProject={item.imageProject} linkCode={item.linkCode}
                                        linkDemo={item.linkDemo} key={index}></Project>
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};


