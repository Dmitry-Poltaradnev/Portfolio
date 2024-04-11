import React from 'react';
import {S} from '../HeaderMenu_Styles'

const items = [
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Projects',
        href: 'projects'
    },
    {
        title: 'Contacts',
        href: 'contacts'
    },
]

export const DesktopMenu: React.FC = () => {
    return (
        <S.StyledDesktopMenu>
            <ul>
                {items.map((item, i) => {
                    return <S.ListItem key={i}> <S.NavLink to={item.href} smooth={true}
                    >{item.title}
                    </S.NavLink></S.ListItem>
                })}
            </ul>
        </S.StyledDesktopMenu>
    );
};


