import * as React from "react";

import './SlideButton.css';

import { ISlideButtonProps } from '.';
import { Button } from '../Button/Button';
import { SlideButtonType } from './SlideButtonType';

export function SlideButton(props: ISlideButtonProps) {
    switch (props.type) {
        case SlideButtonType.Action:
            return (
                <Button url={props.url} text={props.text} type={SlideButtonType.Action}>
                    <i className="button__arrow">></i>
                </Button>
            )
            
        case SlideButtonType.Description:
            return (
                <Button url={props.url} text={props.text} type={SlideButtonType.Description}>
                    <span className="button__line"/>
                </Button>
            )
    
        default:
            return <React.Fragment/>;
    }

}
