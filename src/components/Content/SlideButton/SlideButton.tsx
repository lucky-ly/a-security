import * as React from "react";

import { ISlideButtonProps } from '.';

export default function SlideButton(props: ISlideButtonProps) {
    return (
        <a className={`slide-button_type-${props.type}`} href={props.url}>{props.text}</a>
    )
}
