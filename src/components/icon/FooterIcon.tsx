import React from 'react';
import IconSprite from '../../assets/img/icons-sprite.svg'

type FooterIconPropsType = {
    IconId: string,
    IconWidth?: string,
    IconHeight?: string,
    IconViewBox?: string,
    UrlIcon?:string
}
export const FooterIcon = (props: FooterIconPropsType) => {
    return (
        <a href= {props.UrlIcon || 'pornhub'}>
            <svg width={props.IconWidth || "44"} height={props.IconHeight || "44"}
                 viewBox={props.IconViewBox || "0 0 44 44"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${IconSprite}#${props.IconId}`}></use>
            </svg>
        </a>

    );
};

