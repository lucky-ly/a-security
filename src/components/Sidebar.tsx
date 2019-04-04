import * as React from 'react';

import Logo from './Logo';
import MainMenu from './MainMenu';

class Sidebar extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);        
    }

    public render() {
        return (
            <div className="sidebar open">
                <div className="sidebar-content">
                    <Logo/>
                    <MainMenu/>
                </div>
                <div className="sidebar-toggle"><i id="sidebar-toggle-button" className="fas fa-equals"/></div>
            </div>
        );
    }
}

export default Sidebar;
