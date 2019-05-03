import * as React from "react";

import './FeaturesSlideshowSection.css';

import IParent from 'src/data-types/IParent';
import { DetailsButton } from '../Buttons/DetailsButton';
import { ContentSection } from '../ContentSection';
import { SlideSwitcher } from '../Slideshow';
import { IFeaturesSlideshowSlide } from './IFeaturesSlideshowSlide';

// tslint:disable-next-line: no-empty-interface
export interface IFeaturesSlideshowSectionProps extends IParent {
    data: IFeaturesSlideshowSlide[]
}

// tslint:disable-next-line: no-empty-interface
export interface IFeaturesSlideshowSectionState {
    currentSlideIndex: number;
    slides: IFeaturesSlideshowSlide[];
}

export class FeaturesSlideshowSection extends React.Component<IFeaturesSlideshowSectionProps, IFeaturesSlideshowSectionState> {

    constructor(props: IFeaturesSlideshowSectionProps) {
        super(props)

        this.state = {
            currentSlideIndex: 0,
            slides: props.data,
        }
    }

    public render() {
        const currentSlide = this.state.slides[this.state.currentSlideIndex];

        return (
            <ContentSection id="features-slideshow" className="features-slideshow">
                <div className="features-slideshow__image">
                    <img src={currentSlide.backgroundUrl} alt={currentSlide.imageAlt}/>
                </div>
                <div className="features-slideshow__content">
                    <div className="features-slideshow-content__title">{currentSlide.title}</div>
                    <div className="features-slideshow-content__subtitle">{currentSlide.subtitle}</div>
                    <DetailsButton text="Подробнее о компании" url={currentSlide.detailsUrl} color="#6F6AFF"/>
                </div>
                <div className="features-slideshow__switcher-widget">
                    <div className="switcher-widget__slide-switcher">
                        <SlideSwitcher/>
                    </div>
                    <div className="switcher-widget__content">
                        <div className="switcher-widget__icon" style={{ backgroundImage: `url(${currentSlide.iconUrl})` }}/>
                        <div className="switcher-widget__feature-name">{currentSlide.featureName}</div>
                    </div>
                </div>
            </ContentSection>
        )
    }
}
