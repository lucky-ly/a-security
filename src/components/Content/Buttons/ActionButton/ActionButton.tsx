import * as React from "react";

import "./ActionButton.css";

import { IButtonProps } from '../Button';

// tslint:disable-next-line: no-empty-interface
export interface IProps extends IButtonProps {
    backgroundColor?: string;
}

export const ActionButton = (props: IProps) => {

    const mainColor = props.color ? props.color : "inherit";
    const backgroundColor = props.backgroundColor ? props.backgroundColor : mainColor;
    const styles = {
        backfill: {
            backgroundColor,
        },
        container: {
            width: props.width ? props.width : "auto",
        },
        text: {
            color: mainColor,
        }
    }

    return (
        <a className="button button_type-action" href={props.url} style={styles.container}>
            <span className="button__text" style={styles.text}>{props.text}</span>
            <i className="action-button__arrow">></i>
        </a>
    )
}
