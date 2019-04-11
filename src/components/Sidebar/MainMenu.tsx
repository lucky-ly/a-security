import * as React from 'react';
import IMainMenuState from 'src/data-types/IMainMenuState';
import IMenuItem from 'src/data-types/IMenuItem';
import MenuItemTypeEnum from 'src/data-types/MenuItemTypeEnum';
import MenuItem from './MenuItem';

import './MainMenu.css'

class MainMenu extends React.Component<Readonly<{}>, IMainMenuState> {
    constructor(props: Readonly<{}>) {
        super(props);

        const menuItems: IMenuItem[] = [
            { link: "#", text: "Охрана квартир" },
            { link: "#", text: "Охрана домов" },
            { link: "#", text: "Охрана бизнеса" },
            { link: "#", text: "Противопожарная безопасность" },
            { link: "#", text: "Системы видеонаблюдения" },
            { link: "#", text: "Системы контроля доступа" },
            { link: "#", text: "Прочие услуги" },
        ];

        const footerItems: IMenuItem[] = [
            { link: "#", text: "О компании", itemType: MenuItemTypeEnum.Footer },
            { link: "#", text: "Партнёрам", itemType: MenuItemTypeEnum.Footer },
            { link: "#", text: "Вакансии", itemType: MenuItemTypeEnum.Footer },
            { link: "#", text: "Помощь", itemType: MenuItemTypeEnum.Footer },
            { link: "#", text: "Отзывы", itemType: MenuItemTypeEnum.Footer },
            { link: "#", text: "Контакты", itemType: MenuItemTypeEnum.Footer },
        ];

        this.state = {
            footerItems,
            menuItems
        };
    }

    public render() {
        return (
            <React.Fragment>
                <div className="main-menu__subheader">Услуги</div>
                <nav className="main-menu__menu">
                    {this.renderMenuItems()}
                </nav>
                <footer className="main-menu__footer">
                    {this.renderFooterItems()}
                </footer>
            </React.Fragment>
        );
    }

    private renderItems = (items: IMenuItem[]) => items.map((item, index) => <MenuItem key={index} link={item.link} text={item.text} itemType={item.itemType} />);
    private renderMenuItems = () => this.renderItems(this.state.menuItems);
    private renderFooterItems = () => this.renderItems(this.state.footerItems);
}

export default MainMenu;
