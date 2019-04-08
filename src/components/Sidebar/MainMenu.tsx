import * as React from 'react';
import MenuItem from './MenuItem';

class MainMenu extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);
    }

    public render() {
        return (
            <nav className="sidebar__content">
                <div className="sidebar__item">Услуги</div>
                <ul>
                    <MenuItem link="#" text="Охрана квартир"/>
                    <MenuItem link="#" text="Охрана домов"/>
                    <MenuItem link="#" text="Охрана бизнеса"/>
                    <MenuItem link="#" text="Противопожарная безопасность"/>
                    <MenuItem link="#" text="Системы видеонаблюдения"/>
                    <MenuItem link="#" text="Системы контроля доступа"/>
                    <MenuItem link="#" text="Прочие услуги"/>
                </ul>
                <footer>
                    <ul>
                        <MenuItem link="#" text="О компании"/>
                        <MenuItem link="#" text="Партнёрам"/>
                        <MenuItem link="#" text="Вакансии"/>
                        <MenuItem link="#" text="Помощь"/>
                        <MenuItem link="#" text="Отзывы"/>
                        <MenuItem link="#" text="Контакты"/>
                    </ul>
                </footer>
            </nav>
        );
    }
}

export default MainMenu;
