import React, {useState} from 'react';
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

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen)

    return (
        <S.StyledMobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuWrapper isOpen={menuIsOpen} onClick={() => (setMenuIsOpen(false))}>
                <ul>
                    {items.map((item, i) => {
                        return <S.ListItem key={i}> <S.NavLink isOpen={menuIsOpen} onClick={() => (setMenuIsOpen(false))} to={item.href} smooth={true}
                        >{item.title}
                        </S.NavLink></S.ListItem>
                    })}
                </ul>
            </S.MobileMenuWrapper>
        </S.StyledMobileMenu>
    );
};


