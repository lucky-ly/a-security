import * as React from "react";

import "./ServiceCard.css";

import { Sine } from 'gsap';
import { Helpers } from "src/data-providers/Strings";
import { IServiceDescription } from "src/data-types/IServiceDescription";
import { DetailsButton } from "../Buttons/DetailsButton";
import { Card } from "../Card";
import { HoverEffect, IHoverEffectOptions } from './HoverEffect';

import displacement from "../../../assets/images/photo/services/disp.jpg";
// import test from "../../../assets/images/photo/services/img_service_3.jpg";

// tslint:disable-next-line: no-empty-interface
export interface IServiceCardProps {
    data: IServiceDescription;
}

export class ServiceCard extends React.Component<IServiceCardProps> {
    private hoverEffect: HoverEffect;
    private imageContainerRef: React.RefObject<HTMLDivElement>;
    private triggerElementRef: React.RefObject<HTMLDivElement>;
    
    constructor(props: IServiceCardProps) {
        super(props);

        const hoverOpts: IHoverEffectOptions = {
            displacementImage: displacement,
            easing: Sine.easeOut,
            image1: props.data.imageUrl,
            image2: props.data.imageUrl,
            // image2: props.imageUrl,
            intensity: -0.4,
            speedIn: 0.7,
            speedOut: 0.3,
        };

        this.hoverEffect = new HoverEffect(hoverOpts);
        this.imageContainerRef = React.createRef();
        this.triggerElementRef = React.createRef();

        this.state = {
        }
    }

    public componentDidMount() {
        this.applyEffect();
    }

    public componentDidUpdate() {
        this.applyEffect();
    }

    public render() {
        return (<Card className="service-card" ref={this.triggerElementRef}>
            <div className="service-card__background" ref={this.imageContainerRef} />
            <div className="service-card__content">
                <img src={this.props.data.iconUrl} className="service-card__icon" />
                <DetailsButton text="Подробнее" url={this.props.data.detailsUrl} color="#ffffff" inline={true} />
                <div className="service-card__subtitle">{Helpers.formatSubtitle(this.props.data.subtitle)}</div>
                <div className="service-card__title">{this.props.data.title}</div>
                <div className="service-card__number">{Helpers.formatNumber(this.props.data.number)}</div>
            </div>
        </Card>);
    }

    private applyEffect() {
        const container = this.imageContainerRef.current;
        const trigger = this.triggerElementRef.current;
        if (container && trigger) {
            this.hoverEffect.apply(container, trigger);
        }
    }
}
