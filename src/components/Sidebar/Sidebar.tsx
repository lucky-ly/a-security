import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import "./Sidebar.css";

import ISidebarProps from 'src/data-types/ISidebarProps';
import ISidebarState from 'src/data-types/ISidebarState';
import Logo from './Logo';
import ToggleButtonIcon from './ToggleButtonIcon/ToggleButtonIcon';

class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
    private content: any;
    private timeoutMs: number;
    private preloadTimeoutMs: number;

    constructor(props: ISidebarProps) {
        super(props);
        this.state = {
            isLoaded: props.isLoaded,
            isOpen: false,
        };
        this.content = props.children;
        this.timeoutMs = 800;
        this.preloadTimeoutMs = 600;
    }

    public componentWillReceiveProps = (nextProps: ISidebarProps) =>
    {
        this.setState({ isLoaded: nextProps.isLoaded });
    }

    public render() {
        return (
            <React.Fragment>
                <CSSTransition in={this.state.isOpen} timeout={this.timeoutMs} classNames="sidebar-backdrop" unmountOnExit={true} mountOnEnter={true}>
                    <div className="sidebar-backdrop" onClick={this.sidebarClose}/>
                </CSSTransition>

                <CSSTransition in={this.state.isLoaded} appear={true} timeout={this.preloadTimeoutMs} classNames="sidebar">
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
                </CSSTransition>
            </React.Fragment>
        );
    }

    private toggleOpen = () => {
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

    private switchOpenClass = (className: string): string =>
        this.state.isOpen ? `${className} ${className}_open` : className;
}

export default Sidebar;
