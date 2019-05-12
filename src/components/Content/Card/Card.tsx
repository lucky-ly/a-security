import * as React from "react";
import IParent from 'src/data-types/IParent';

import "./Card.css";

export interface ICardProps extends IParent {
    className?: string;
}

export const Card = React.forwardRef((props: ICardProps, ref?: React.Ref<HTMLDivElement>) => {
        return (
            <div className={`card ${props.className ? props.className : ""}`} ref={ref}>{ props.children }</div>
        );
    }
);
