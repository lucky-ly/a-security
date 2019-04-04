import * as React from 'react';

import "./Sidebar.css";

import Logo from './Logo';
import MainMenu from './MainMenu';

class Sidebar extends React.Component<Readonly<{}>, ISidebarState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            IsOpen: true
        }

        this.ToggleOpen = this.ToggleOpen.bind(this);
    }

    public render() {
        return (
            <div className={this.state.IsOpen ? "sidebar open" : "sidebar"}>
                <div className="sidebar-toggle" onClick={this.ToggleOpen}>
                    <div className="toggle-button">
                        <div className="bar top"/>
                        <div className="bar bottom"/>
                    </div>
                </div>
                <div className="sidebar-content">
                    <Logo/>
                    <MainMenu/>
                </div>
            </div>
        );
    }

    private ToggleOpen() {
        const newState: ISidebarState = {
            IsOpen: !this.state.IsOpen
        }
        this.setState(newState)
    }
}

export default Sidebar;
