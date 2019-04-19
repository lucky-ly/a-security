import * as React from "react";

import './TopSlideSection.css';

import IParent from 'src/data-types/IParent';
import ISlideShow from 'src/data-types/Slideshow/ISlideShow';
import ITopSlideData from 'src/data-types/Slideshow/ITopSlideData';

export interface IProps extends IParent {
    slideShowData: ISlideShow<ITopSlideData>
}

export default class TopSlideSection extends React.Component<IProps, ISlideShow<ITopSlideData>> {
    constructor(props: IProps) {
        super(props)

        this.state = props.slideShowData;
    }

    public render() {
        const currentSlide = this.state.slides[this.state.currentSlide];

        const styles: React.CSSProperties = {
            backgroundColor: currentSlide.backgroundFallbackColor,
            backgroundImage: `url(${currentSlide.backgroundUrl})`
        };

        return (
            <div className="top-slide-section" style={styles}>
                <div className="top-slide-section__number">{currentSlide.number.toString().padStart(2,'0')+'.'}</div>
                <h1 className="top-slide-section__title">{currentSlide.title}</h1>
                <h2 className="top-slide-section__subtitle">{currentSlide.subtitle}</h2>
                <a className="top-slide-section__action-button" href={currentSlide.actionUrl}>{currentSlide.actionText}</a>
                <a className="top-slide-section__description-button" href={currentSlide.descriptionUrl}>{currentSlide.descriptionText}</a>
            </div>
        )
    }
}
