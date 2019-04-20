import * as React from "react";

import './TopSlideSection.css';

import IParent from 'src/data-types/IParent';
import ISlideShow from 'src/data-types/Slideshow/ISlideShow';
import ITopSlideData from 'src/data-types/Slideshow/ITopSlideData';
import ContactsWidget from '../ContactsWidget/ContactsWidget';
import Slide from '../Slide';
import SlideButton, { SlideButtonType } from '../SlideButton';

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

        return (
            <section className="top-slide-section">
                <div className="top-slide-section__contacts-widget">
                    <ContactsWidget phoneNumber="+7 (343) 344-60-60" callBackUrl="#/requestcallback" placeOrderUrl="#/placeorder"/>
                </div>
                <Slide data={currentSlide}>
                    <SlideButton type={SlideButtonType.Action} url={currentSlide.actionUrl} text={currentSlide.actionText}/>
                    <SlideButton type={SlideButtonType.Description} url={currentSlide.descriptionUrl} text={currentSlide.descriptionText}/>
                </Slide>
            </section>
        );
    }
}
