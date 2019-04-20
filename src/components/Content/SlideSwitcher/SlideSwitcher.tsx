import * as React from "react";

export default class SlideSwitcher extends React.Component {

    constructor(props: any) {
        super(props)

        this.state = {
        }
    }

    public render() {
        return (
            <React.Fragment>
                <div className="slide-switcher__button">
                    <span className="slide-switcher-button__icon">&gt;</span>
                </div>
                <div className="slide-switcher__button">
                    <span className="slide-switcher-button__icon">&lt;</span>
                </div>
            </React.Fragment>
        )
    }
}
