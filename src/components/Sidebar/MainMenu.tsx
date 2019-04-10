import * as React from 'react';
import IMainMenuState from 'src/data-types/IMainMenuState';
import IMenuItem from 'src/data-types/IMenuItem';
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
            { link: "#", text: "О компании" },
            { link: "#", text: "Партнёрам" },
            { link: "#", text: "Вакансии" },
            { link: "#", text: "Помощь" },
            { link: "#", text: "Отзывы" },
            { link: "#", text: "Контакты" },
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

    private renderItems = (items: IMenuItem[]) => items.map((item, index) => <MenuItem key={index} link={item.link} text={item.text} />);
    private renderMenuItems = () => this.renderItems(this.state.menuItems);
    private renderFooterItems = () => this.renderItems(this.state.footerItems);
}

export default MainMenu;
