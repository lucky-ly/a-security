import * as React from 'react';
import IMenuItem from 'src/data-types/IMenuItem';

function MenuItem({ link: link, text: text }: IMenuItem) {
    return (
        <li className="sidebar__item"><a href={link}>{text}</a></li>
    );
}

export default MenuItem;
