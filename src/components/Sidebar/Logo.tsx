import * as React from 'react';
import ITitled from 'src/data-types/ITitled';
import logo from '../../assets/logo.svg';

function Logo(props: ITitled) {
    return (
        <a href="/" title={props.title}>
            <img src={logo} alt="logo" />
        </a>
    );
}

export default Logo;
