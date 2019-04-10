import * as React from 'react';
import IMenuItem from 'src/data-types/IMenuItem';

function MenuItem({ link: link, text: text, title: title }: IMenuItem) {
    return (
        <div className="main-menu__item">
            <a href={link} title={title ? title : text}>{text}</a>
        </div>
    );
}

export default MenuItem;
