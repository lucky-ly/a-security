import * as React from "react";
import IParent from 'src/data-types/IParent';

import "./Card.css";

export interface ICardProps extends IParent {
    className?: string;
}

export const Card = (props: ICardProps) => {
    return (
        <div className={`card ${props.className ? props.className : ""}`}>{ props.children }</div>
    )
}
