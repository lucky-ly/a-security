import * as React from "react";

import './SlideSwitcher.css';

import SwitcherButton from '../SwitcherButton';

export default function SlideSwitcher() {
    return (
        <React.Fragment>
            <SwitcherButton>&gt;</SwitcherButton>
            <SwitcherButton>&lt;</SwitcherButton>
        </React.Fragment>
    )
}
