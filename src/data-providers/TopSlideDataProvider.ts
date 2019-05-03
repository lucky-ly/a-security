import IDataProvider from './IDataProvider';

import slideImage1 from "../assets/images/photo/top-slideshow/top-slide-1.jpg";
import slideImage2preview from "../assets/images/photo/top-slideshow/top-slide-2-preview.jpg";
import slideImage2 from "../assets/images/photo/top-slideshow/top-slide-2.jpg";

import ITopSlideData from '../data-types/Slideshow/ITopSlideData';

export default class TopSlideDataProvider implements IDataProvider<ITopSlideData[]> {

    public getData(arg: void): ITopSlideData[] {
        return [
            {
                actionText: 'Оставить заявку',
                actionUrl: '#/hello-world',
                backgroundUrl: slideImage1,
                descriptionText: 'Подробнее',
                descriptionUrl: '#/hello-description',
                number: 1,
                subtitle: [
                    'Охранная сигнализация',
                    'Тревожная кнопка',
                    'Охрана офиса, магазина, ресторана',
                ],
                title: 'Дистанционная охрана бизнеса',
            },
            {
                actionText: 'Оставить заявку',
                actionUrl: '#/hello-world',
                backgroundUrl: slideImage2,
                descriptionText: 'Подробнее',
                descriptionUrl: '#/hello-description',
                number: 2,
                previewUrl: slideImage2preview,
                subtitle: [
                    'Охранная сигнализация',
                    'Тревожная кнопка',
                    'Комплексная защита',
                ],
                title: 'Дистанционная охрана квартир',
            }
        ];
    }
}