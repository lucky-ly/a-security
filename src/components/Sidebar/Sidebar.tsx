import * as React from 'react';

import "./Sidebar.css";

import ISidebarState from 'src/data-types/ISidebarState';
import Logo from './Logo';
import MainMenu from './MainMenu';
import ToggleButtonIcon from './ToggleButtonIcon';

class Sidebar extends React.Component<Readonly<{}>, ISidebarState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            isOpen: true
        }

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    public render() {
        return (
            <React.Fragment>
                <div className={this.switchOpenClass("sidebar-backdrop")}/>

                <div className="sidebar">
                    <div className="sidebar__logo">
                        <Logo/>
                    </div>

                    <div className={this.switchOpenClass("sidebar__movable")}>
                        <div className="sidebar__content">
                            <MainMenu/>
                            {/* <FooterMenu/> */}
                        </div>
                        <div className="sidebar__toggle-button" onClick={this.toggleOpen}>
                            <div className="toggle-button__icon">
                                <ToggleButtonIcon isOpen={this.state.isOpen}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    private toggleOpen() {
        const newState: ISidebarState = {
            isOpen: !this.state.isOpen
        }
        this.setState(newState)
    }

    private switchOpenClass(className: string): string {
        return this.state.isOpen ? `${className} ${className}_open` : className;
    }
}

export default Sidebar;
