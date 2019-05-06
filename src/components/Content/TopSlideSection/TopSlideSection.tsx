import * as React from "react";

import './Animations.css';
import './TopSlideSection.css';

import ITopSlideData from 'src/data-types/Slideshow/ITopSlideData';
import { ITopSlideSectionProps } from './ITopSlideSectionProps';

import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { Helpers } from 'src/data-providers/Strings';
import { ILoadable } from 'src/data-types/ILoadable';
import { ActionButton } from '../Buttons/ActionButton';
import { DetailsButton } from '../Buttons/DetailsButton';
import { ContactsWidget } from '../ContactsWidget/ContactsWidget';
import { SlidePreview, SlideSwitcher } from '../Slideshow';

export interface ITopSlideSectionState extends ILoadable {
    currentSlideIndex: number;
    previewContainerTransitioned: boolean;
    contactsContainerTransitioned: boolean;
    curtainTransitioned: boolean;
    contentTransitioned: boolean;
}

export class TopSlideSection extends React.Component<ITopSlideSectionProps, ITopSlideSectionState> {
    private slides: ITopSlideData[];

    private timeouts = {
        content: 400,
        curtain: 200,
    };

    private curtainClasses: CSSTransitionClassNames = {
        exitActive: "slide__curtain_exit-active",
        exitDone: "slide__curtain_exit-done",
    }

    private contentClasses: CSSTransitionClassNames = {
        enter: "slide__content_enter",
        enterActive: "slide__content_enter-active",
        enterDone: "slide__content_enter-done",
        exitActive: "slide__content_exit-active",
        exitDone: "slide__content_exit-done",
    }

    private contactClasses: CSSTransitionClassNames = {
        enter: "top-slide-section__contacts-widget_enter",
        enterActive: "top-slide-section__contacts-widget_enter-active",
        enterDone: "top-slide-section__contacts-widget_enter-done",
    }

    private switcherClasses: CSSTransitionClassNames = {
        enter: "top-slide-section__switcher-widget_enter",
        enterActive: "top-slide-section__switcher-widget_enter-active",
        enterDone: "top-slide-section__switcher-widget_enter-done",
    }

    constructor(props: ITopSlideSectionProps) {
        super(props)

        this.slides = props.slideShowData;
        this.state = {
            contactsContainerTransitioned: props.isLoaded,
            contentTransitioned: props.isLoaded,
            currentSlideIndex: 0,
            curtainTransitioned: props.isLoaded,
            isLoaded: props.isLoaded,
            previewContainerTransitioned: props.isLoaded,
        };
    }

    public componentWillReceiveProps = (nextProps: ITopSlideSectionProps) => {
        this.setState({ isLoaded: nextProps.isLoaded, currentSlideIndex: 0 });
    }

    public render() {
        const currentSlide = this.slides[this.state.currentSlideIndex];
        const styles: React.CSSProperties = {
            backgroundImage: `url(${currentSlide.imageUrl})`
        };

        return (
            <section className="top-slide-section">
                <div className="slide__background">
                    <div className="slide__image" style={styles} />
                    <CSSTransition
                        in={!this.state.isLoaded}
                        timeout={this.timeouts.curtain}
                        classNames={this.curtainClasses}
                        unmountOnExit={true}
                        // tslint:disable-next-line: jsx-no-lambda
                        onEntered={() => { this.setState({ curtainTransitioned: true }) }}
                        >
                        <div className="slide__curtain" />
                    </CSSTransition>
                    <div className="slide__overlay" />
                </div>
                
                <CSSTransition
                    in={this.state.isLoaded && this.state.previewContainerTransitioned}
                    timeout={this.timeouts.content}
                    classNames={this.contentClasses}
                    unmountOnExit={true}
                    mountOnEnter={true}
                    // tslint:disable-next-line: jsx-no-lambda
                    onEntered={() => { this.setState({ contentTransitioned: true }) }}
                    >
                    <div className="slide__content">
                        <div className="slide__number">{Helpers.formatNumber(currentSlide.number)}</div>
                        <h1 className="slide__title">{currentSlide.title}</h1>
                        <h2 className="slide__subtitle">{Helpers.formatSubtitle(currentSlide.subtitle)}</h2>
                        <div className="slide__buttons">
                            <ActionButton url={currentSlide.actionUrl} text={currentSlide.actionText}/>
                            <DetailsButton url={currentSlide.descriptionUrl} text={currentSlide.descriptionText}/>
                        </div>
                    </div>
                </CSSTransition>


                <CSSTransition
                    in={this.state.isLoaded}
                    timeout={this.timeouts.content}
                    classNames={this.contactClasses}
                    unmountOnExit={true}
                    mountOnEnter={true}
                    // tslint:disable-next-line: jsx-no-lambda
                    onEntered={() => { this.setState({ contactsContainerTransitioned: true }) }}
                    >
                    <div className="top-slide-section__contacts-widget">
                        <ContactsWidget phoneNumber="+73433446060" callBackUrl="#/requestcallback" placeOrderUrl="#/placeorder"/>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={this.state.isLoaded}
                    timeout={this.timeouts.content}
                    classNames={this.switcherClasses}
                    unmountOnExit={true}
                    mountOnEnter={true}
                    // tslint:disable-next-line: jsx-no-lambda
                    onEntered={()=>{ this.setState({ previewContainerTransitioned: true }) }}
                    >
                    <div className="top-slide-section__switcher-widget">
                        <div className="top-slide-section__slide-switcher">
                            <SlideSwitcher/>
                        </div>
                        <SlidePreview isLoaded={this.state.isLoaded && this.state.previewContainerTransitioned} data={this.getNextSlide()}/>
                    </div>
                </CSSTransition>
            </section>
        );
    }

    private getNextSlide(): ITopSlideData {
        const count = this.slides.length;
        const nextSlide = this.state.currentSlideIndex + 1;

        if (nextSlide === count) {
            return this.slides[0];
        }

        return this.slides[nextSlide];
    }
}
