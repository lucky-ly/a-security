import * as React from 'react';
import MenuItem from './MenuItem';

class MainMenu extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);
    }

    public render() {
        return (
            <nav className="main-nav">
                <div className="nav-subheader">Услуги</div>
                <ul>
                    <MenuItem Link="#" Text="Охрана квартир"/>
                    <MenuItem Link="#" Text="Охрана домов"/>
                    <MenuItem Link="#" Text="Охрана бизнеса"/>
                    <MenuItem Link="#" Text="Противопожарная безопасность"/>
                    <MenuItem Link="#" Text="Системы видеонаблюдения"/>
                    <MenuItem Link="#" Text="Системы контроля доступа"/>
                    <MenuItem Link="#" Text="Прочие услуги"/>
                </ul>
                <footer>
                    <ul>
                        <MenuItem Link="#" Text="О компании"/>
                        <MenuItem Link="#" Text="Партнёрам"/>
                        <MenuItem Link="#" Text="Вакансии"/>
                        <MenuItem Link="#" Text="Помощь"/>
                        <MenuItem Link="#" Text="Отзывы"/>
                        <MenuItem Link="#" Text="Контакты"/>
                    </ul>
                </footer>
            </nav>
        );
    }
}

export default MainMenu;
