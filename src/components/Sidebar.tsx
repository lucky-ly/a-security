import * as React from 'react';

class Sidebar extends React.Component {
    public render() {
        return (
            <div className="sidebar open">
                <div className="sidebar-content"/>
                <div className="sidebar-toggle"><i id="sidebar-toggle-button" className="fas fa-equals"/></div>
            </div>
        );
    }
}

export default Sidebar;
