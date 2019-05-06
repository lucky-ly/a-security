import { IServiceDescription } from 'src/data-types/IServiceDescription';
import IDataProvider from './IDataProvider';

import icon1 from "../assets/images/photo/services/Icon_service_1.svg";
import icon2 from "../assets/images/photo/services/Icon_service_2.svg";
import icon3 from "../assets/images/photo/services/Icon_service_3.svg";
import icon4 from "../assets/images/photo/services/Icon_service_4.svg";
import icon5 from "../assets/images/photo/services/Icon_service_5.svg";
import icon6 from "../assets/images/photo/services/Icon_service_6.svg";
import icon7 from "../assets/images/photo/services/Icon_service_7.svg";

import img1 from "../assets/images/photo/services/img_service_1.jpg";
import img2 from "../assets/images/photo/services/img_service_2.jpg";
import img3 from "../assets/images/photo/services/img_service_3.jpg";
import img4 from "../assets/images/photo/services/img_service_4.jpg";
import img5 from "../assets/images/photo/services/img_service_5.jpg";
import img6 from "../assets/images/photo/services/img_service_6.jpg";
import img7 from "../assets/images/photo/services/img_service_7.jpg";

export class ServicesListDataProvider implements IDataProvider<IServiceDescription[]> {
    public getData(arg: void): IServiceDescription[] {
        return [
            {
                detailsUrl: "#/service/1",
                iconUrl: icon1,
                imageUrl: img1,
                number: 1,
                subtitle: "Охранная сигнализация  —  Тревожная кнопка  —  Охрана офиса, магазина, ресторана",
                title: "Дистанционная охрана бизнеса",
            },
            {
                detailsUrl: "#/service/2",
                iconUrl: icon2,
                imageUrl: img2,
                number: 2,
                subtitle: "Охранная сигнализация  —  Тревожная кнопка  —  Охрана офиса, магазина, ресторана",
                title: "Дистанционная охрана квартир",
            },
            {
                detailsUrl: "#/service/3",
                iconUrl: icon3,
                imageUrl: img3,
                number: 3,
                subtitle: "Охранная сигнализация  —  Тревожная кнопка  —  Комплексная защита",
                title: "Дистанционная охрана домов",
            },
            {
                detailsUrl: "#/service/4",
                iconUrl: icon4,
                imageUrl: img4,
                number: 4,
                subtitle: "Проектирование  —  Система пожаротушения, Система дымоудаления  —  Система эвакуации и оповещения людей о пожаре",
                title: "Пожарная безопасность",
            },
            {
                detailsUrl: "#/service/5",
                iconUrl: icon5,
                imageUrl: img5,
                number: 5,
                subtitle: "Монтаж  —  Модернизация систем  —  Техническое обслуживание  —  Перевод с Аналоговой системы на IP",
                title: "Системы видеонаблюдения",
            },
            {
                detailsUrl: "#/service/6",
                iconUrl: icon6,
                imageUrl: img6,
                number: 6,
                subtitle: "Ключ-брелок  —  Кард-ключ  —  Электронный код  —  Отпечатки пальцев  —  Сетчатка глаза",
                title: "Системы контроля доступа",
            },
            {
                detailsUrl: "#/service/7",
                iconUrl: icon7,
                imageUrl: img7,
                number: 7,
                subtitle: "Физическая охрана объектов и мероприятий  —  Сопровождение грузов  —  Антикражные системы  —  Технический сервис",
                title: "Прочие услуги",
            },
        ];
    }
}