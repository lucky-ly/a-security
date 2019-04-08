import * as React from 'react';
import logo from '../../assets/logo.svg';

function Logo() {
    return (
        <a href="/">
            <img src={logo} alt="logo" />
        </a>
    );
}

export default Logo;
