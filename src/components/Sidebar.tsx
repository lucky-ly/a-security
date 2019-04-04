import * as React from 'react';

import Logo from './Logo';

class Sidebar extends React.Component {
    public render() {
        return (
            <div className="sidebar open">
                <div className="sidebar-content">
                    <Logo/>
                </div>
                <div className="sidebar-toggle"><i id="sidebar-toggle-button" className="fas fa-equals"/></div>
            </div>
        );
    }
}

export default Sidebar;
