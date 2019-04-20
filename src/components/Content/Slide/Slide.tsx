import * as React from "react";

import './Slide.css';

import ITopSlideData from 'src/data-types/Slideshow/ITopSlideData';
import { ISlideProps } from '.';

export default function Slide(props: ISlideProps) {
    const currentSlide: ITopSlideData = props.data;

    const styles: React.CSSProperties = {
        backgroundColor: currentSlide.backgroundFallbackColor,
        backgroundImage: `url(${currentSlide.backgroundUrl})`
    };

    return (
        <div className="slide" style={styles}>
            <div className="slide__number">{currentSlide.number.toString().padStart(2, '0') + '.'}</div>
            <h1 className="slide__title">{currentSlide.title}</h1>
            <h2 className="slide__subtitle">{currentSlide.subtitle}</h2>
            <div className="slide__buttons">
                {props.children}
            </div>
        </div>
    );
}
