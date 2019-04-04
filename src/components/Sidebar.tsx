import * as React from 'react';

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
                <div className="sidebar-content">
                    <Logo/>
                    <MainMenu/>
                </div>
                <div className="sidebar-toggle"><i id="sidebar-toggle-button" className="fas fa-equals"/></div>
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
