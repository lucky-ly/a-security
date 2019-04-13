import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import "./Sidebar.css";

import ISidebarProps from 'src/data-types/ISidebarProps';
import ISidebarState from 'src/data-types/ISidebarState';
import Logo from './Logo';
import ToggleButtonIcon from './ToggleButtonIcon';

class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
    private content: any;
    private timeoutMs: number;

    constructor(props: ISidebarProps) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.content = props.children; 
        this.timeoutMs = 800;
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    public render() {
        return (
            <React.Fragment>
                <CSSTransition in={this.state.isOpen} timeout={this.timeoutMs} classNames="sidebar-backdrop" unmountOnExit={true} mountOnEnter={true}>
                    <div className="sidebar-backdrop" onClick={this.sidebarClose}/>
                </CSSTransition>

                <div className="sidebar">
                    <div className="sidebar__logo">
                        <Logo title="На главную"/>
                    </div>

                    <div className={this.switchOpenClass("sidebar__movable")} onMouseEnter={this.sidebarOpen} onMouseLeave={this.sidebarClose}>
                        <div className="sidebar__content">
                            {this.content}
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
        if (this.state.isOpen) {
            this.sidebarClose();
        }
        else
        {
            this.sidebarOpen();
        }
    }

    private sidebarOpen = () => this.setState({ isOpen: true });

    private sidebarClose = () => this.setState({ isOpen: false });

    private switchOpenClass(className: string): string {
        return this.state.isOpen ? `${className} ${className}_open` : className;
    }
}

export default Sidebar;
