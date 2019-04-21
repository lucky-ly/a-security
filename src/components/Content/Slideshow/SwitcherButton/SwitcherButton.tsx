import * as React from "react";

import './SwitcherButton.css';

export interface ISwitcherButtonProps {
    children?: React.ReactNode
}

export function SwitcherButton (props: ISwitcherButtonProps) {
    return (
        <div className="switcher-button">
            <span className="switcher-button__icon">{props.children}</span>
        </div>
    )
}

