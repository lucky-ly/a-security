import * as React from 'react';
import logo from '../assets/logo.svg';

function Logo() {
    return (
        <div className="logo">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </div>
    );
}

export default Logo;
