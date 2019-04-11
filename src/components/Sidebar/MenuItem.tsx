import * as React from 'react';
import IMenuItem from 'src/data-types/IMenuItem';
import MenuItemTypeEnum from 'src/data-types/MenuItemTypeEnum';

import "./MenuItem.css";

function MenuItem({ link: link, text: text, title: title, itemType: itemType }: IMenuItem) {
    return (
        <div className={`main-menu__item ${getTypeClass(itemType)}`}>
            <a href={link} title={title ? title : text}>{text}</a>
        </div>
    );

}

function getTypeClass(itemType?: MenuItemTypeEnum): string {
    switch (itemType) {
        case MenuItemTypeEnum.Menu:
            return "main-menu__item_type-menu";
        case MenuItemTypeEnum.Footer:
            return "main-menu__item_type-footer";
            
        default:
            return "main-menu__item_type-menu";
    }
}


export default MenuItem;
