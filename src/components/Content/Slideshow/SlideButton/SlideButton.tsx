import * as React from "react";

import './SlideButton.css';

import { ISlideButtonProps } from '.';
import { SlideButtonType } from './SlideButtonType';

export function SlideButton(props: ISlideButtonProps) {
    switch (props.type) {
        case SlideButtonType.Action:
            return (
                <a className="slide-button slide-button_type-action" href={props.url}>
                    <span className="slide-button__text">{props.text}</span>
                    <i className="slide-button__arrow">></i>
                </a>
            )
            
        case SlideButtonType.Description:
            return (
                <a className="slide-button slide-button_type-description" href={props.url}>
                    <span className="slide-button__text">{props.text}</span>
                    <span className="slide-button__line"/>
                </a>
            )
    
        default:
            return <React.Fragment/>;
    }

}
