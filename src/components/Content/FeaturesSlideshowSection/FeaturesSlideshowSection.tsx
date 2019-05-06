import * as React from "react";

import './FeaturesSlideshowSection.css';

import IParent from 'src/data-types/IParent';
import { DetailsButton } from '../Buttons/DetailsButton';
import { ContentSection } from '../ContentSection';
import { SlideSwitcher } from '../Slideshow';
import { IFeaturesSlideshowSlide } from './IFeaturesSlideshowSlide';

// tslint:disable-next-line: no-empty-interface
export interface IFeaturesSlideshowSectionProps extends IParent {
    slides: IFeaturesSlideshowSlide[]
    mainImageUrl: string;
    title: string;
    subtitle: string;
    detailsUrl: string;
    detailsText: string;
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
            slides: props.slides,
        }
    }

    public render() {
        const currentSlide = this.state.slides[this.state.currentSlideIndex];

        return (
            <ContentSection id="features-slideshow" className="features-slideshow">
                <div className="features-slideshow__image">
                    <img src={this.props.mainImageUrl} alt=""/>
                </div>
                <div className="features-slideshow__content">
                    <div className="features-slideshow-content__title">{this.props.title}</div>
                    <div className="features-slideshow-content__subtitle">{this.props.subtitle}</div>
                    <div className="features-slideshow-content__buttons">
                        <DetailsButton text={this.props.detailsText} url={this.props.detailsUrl} color="#6F6AFF" inline={true}/>
                    </div>
                    
                    <div className="features-slideshow__switcher-widget">
                        <div className="switcher-widget__slide-switcher">
                            <SlideSwitcher/>
                        </div>
                        <div className="switcher-widget__content">
                            <div className="switcher-widget__icon" style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}/>
                            <div className="switcher-widget__feature-name-container">
                                <div className="switcher-widget__feature-name">
                                    {currentSlide.featureName}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>
        )
    }
}
