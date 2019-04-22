import * as React from "react";

import { ILoadable } from 'src/data-types/ILoadable';
import logo from '../../../assets/logo.svg';
import './Preloader.css';

export interface IProps extends ILoadable {
    children?: React.ReactNode
}

// tslint:disable-next-line: no-empty-interface
export interface IState extends ILoadable {
}

export class Preloader extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            isLoaded: props.isLoaded
        }
    }

    public componentWillReceiveProps = (nextProps: IProps) => {
        this.setState({ isLoaded: nextProps.isLoaded });
    }

    public render() {
        if (this.state.isLoaded) { return null; }

        return (
            <div className="preloader">
                <div className="preloader__animation">
                    <img src={logo} />
                </div>
            </div>
        )
    }
}
