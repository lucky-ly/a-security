import * as React from "react";

import "./Button.css";

export interface IButtonProps {
    children?: React.ReactNode
    url: string;
    text: string;
    type?: string;
    color?: string;
    inline?: boolean;
}

export const Button = (props: IButtonProps) => {
    const style = {
        color: props.color ? props.color : "inherit",
    };

    const classes = ["button"];

    if (props.type) { classes.push(`button_type-${props.type}`); }
    if (props.inline) { classes.push(`button_inline`); }
    
    return (
        <a className={classes.join(" ")} href={props.url}>
            <span className="button__text" style={style}>{props.text}</span>
            {props.children}
        </a>);
};
