import * as React from "react";

import './SlideButton.css';

import { ISlideButtonProps } from '.';
import { SlideButtonType } from './SlideButtonType';

export default function SlideButton(props: ISlideButtonProps) {
    switch (props.type) {
        case SlideButtonType.Action:
            return (
                <div className="slide-button slide-button_type-action">
                    <a href={props.url}>{props.text}</a>
                    <i className="slide-button__arrow">></i>
                </div>
            )
            
        case SlideButtonType.Description:
            return (
                <div className="slide-button slide-button_type-description">
                    <a href={props.url}>{props.text}</a>
                    <span className="slide-button__line"/>
                </div>
            )
    
        default:
            return <React.Fragment/>;
    }

}
