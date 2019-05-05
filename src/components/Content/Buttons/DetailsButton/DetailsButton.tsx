import * as React from "react";

import "./DetailsButton.css";

import { Button, IButtonProps } from '../Button';

// tslint:disable-next-line: no-empty-interface
export interface IProps extends IButtonProps {
}

export const DetailsButton = (props: IProps) => {

    const lineStyle: React.CSSProperties = {
        backgroundColor: props.color ? props.color : "#ffffff",
    }

    return (
        <Button url={props.url} text={props.text} color={props.color} inline={props.inline}>
            <span className="details-button__line" style={lineStyle}/>
        </Button>
    )
}
