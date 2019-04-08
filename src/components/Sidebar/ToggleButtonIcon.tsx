import * as React from 'react';

import "./ToggleButtonIcon.css";

import IOpenable from 'src/data-types/IOpenable';

export default function ToggleButtonIcon({isOpen: isOpen}: IOpenable) {
    return (
        <React.Fragment>
            <div className={isOpen ? "toggle-button__bar toggle-button__bar-top_open" : "toggle-button__bar toggle-button__bar-top"} />
            <div className={isOpen ? "toggle-button__bar toggle-button__bar-bottom_open" : "toggle-button__bar toggle-button__bar-bottom"} />
        </React.Fragment>
    );
}
