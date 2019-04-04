import * as React from 'react';
import logo from '../assets/logo.svg';

class Logo extends React.Component {
    public render() {
        return (
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        );
    }
}

export default Logo;
