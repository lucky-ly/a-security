import * as React from 'react';
import { IMenuItem } from 'src/data-types/MenuItem';

function MenuItem({ Link, Text }: IMenuItem) {
    return (
        <li className="nav-item"><a href={Link}>{Text}</a></li>
    );
}

export default MenuItem;
