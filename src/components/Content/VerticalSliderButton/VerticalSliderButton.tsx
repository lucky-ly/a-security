import * as React from "react";

import "./VerticalSliderButton.css"

export interface IProps {
    children?: React.ReactNode
    url: string;
    text: string;
    backroundColor: string;
}

export default function VerticalSliderButton (props: IProps) {
    const style = { backgroundColor: props.backroundColor };
    return (
        <a href={props.url} className="slider" style={style}>
            <div className="slider__icon" style={style} title={props.text}>
                {props.children}
            </div>
            <div className="slider__text">
                {props.text}
            </div>
        </a>
    )
}
