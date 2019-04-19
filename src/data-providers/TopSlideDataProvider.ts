import IDataProvider from './IDataProvider';

import dummyBackground from "../assets/rand-bg-1080.jpg";

import ISlideShow from 'src/data-types/Slideshow/ISlideShow';
import ITopSlideData from '../data-types/Slideshow/ITopSlideData';

export default class TopSlideDataProvider implements IDataProvider<ISlideShow<ITopSlideData>> {

    public getData(arg: void): ISlideShow<ITopSlideData> {
        return {
            currentSlide: 0,
            slides: [
                {
                    actionText: 'Оставить заявку',
                    actionUrl: '#/hello-world',
                    backgroundFallbackColor: '#282844',
                    backgroundUrl: dummyBackground,
                    descriptionText: 'Подробнее',
                    descriptionUrl: '#/hello-description',
                    number: 1,
                    subtitle: 'Заголовок 2 lvl.',
                    title: 'Заголовок 1 lvl.',
                }
            ],
        };
    }
}