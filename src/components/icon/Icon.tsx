import React from 'react';
import IconSprite from '../../assets/img/icons-sprite.svg'

type IconPropsType = {
    IconId: string,
    IconWidth?: string,
    IconHeight?: string,
    IconViewBox?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.IconWidth || "112"} height={props.IconHeight || "112"}
             viewBox={props.IconViewBox || "0 0 112 112"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconSprite}#${props.IconId}`}></use>
        </svg>
    );
};

