import * as React from "react";

import "./Button.css";

export interface IButtonProps {
    children?: React.ReactNode
    url: string;
    text: string;
    type?: string;
}

export const Button = (props: IButtonProps) => {
    return (
        <a className={`button ${props.type ? `button_type-${props.type}` : ""}`} href={props.url}>
            <span className="button__text">{props.text}</span>
            {props.children}
        </a>);
};
