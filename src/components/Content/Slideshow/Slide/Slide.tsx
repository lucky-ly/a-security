import * as React from "react";

import './Slide.css';

import ITopSlideData from 'src/data-types/Slideshow/ITopSlideData';
import { isArray } from 'util';
import { ISlideProps } from '.';

export function Slide(props: ISlideProps) {
    const currentSlide: ITopSlideData = props.data;

    const styles: React.CSSProperties = {
        backgroundImage: `url(${currentSlide.backgroundUrl})`
    };

    return (
        <div className="slide">
            <div className="slide__background">
                <div className="slide__image" style={styles}/>
                <div className="slide__overlay"/>
            </div>
            <div className="slide__content">
                <div className="slide__number">{currentSlide.number.toString().padStart(2, '0') + '.'}</div>
                <h1 className="slide__title">{currentSlide.title}</h1>
                <h2 className="slide__subtitle" dangerouslySetInnerHTML={{ __html: getSubtitle(currentSlide.subtitle)}}/>
                <div className="slide__buttons">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

function getSubtitle(params: string | string[]) {
    return isArray(params) ? params.join('&#160&#160—&#160&#160') : params;
}