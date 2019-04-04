import * as React from 'react';

class MainMenu extends React.Component {
    public render() {
        return (
            <nav className="main-nav">
                <div className="nav-subheader">Услуги</div>
                <ul>
                    <li className="nav-item"><a href="#">Охрана квартир</a></li>
                    <li className="nav-item"><a href="#">Охрана домов</a></li>
                    <li className="nav-item"><a href="#">Охрана бизнеса</a></li>
                    <li className="nav-item"><a href="#">Противопожарная безопасность</a></li>
                    <li className="nav-item"><a href="#">Системы видеонаблюдения</a></li>
                    <li className="nav-item"><a href="#">Системы контроля доступа</a></li>
                    <li className="nav-item"><a href="#">Прочие услуги</a></li>
                </ul>
                <footer>
                    <ul>
                        <li className="nav-item"><a href="#">О компании</a></li>
                        <li className="nav-item"><a href="#">Партнёрам</a></li>
                        <li className="nav-item"><a href="#">Вакансии</a></li>
                        <li className="nav-item"><a href="#">Помощь</a></li>
                        <li className="nav-item"><a href="#">Отзывы</a></li>
                        <li className="nav-item"><a href="#">Контакты</a></li>
                    </ul>
                </footer>
            </nav>
        );
    }
}

export default MainMenu;
