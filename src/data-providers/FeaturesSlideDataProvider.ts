import { IFeaturesSlideshowSlide } from 'src/components/Content/FeaturesSlideshowSection/IFeaturesSlideshowSlide';
import IDataProvider from './IDataProvider';

import icon1 from '../assets/images/photo/features-slideshow/icon-1.svg';
import slide1 from '../assets/images/photo/features-slideshow/slide-1.jpg';

export class FeaturesSlideDataProvider implements IDataProvider<IFeaturesSlideshowSlide[]> {
    public getData(arg: void): IFeaturesSlideshowSlide[] {
        return [
            {
                backgroundUrl: slide1,
                detailsUrl: "#/features/modern-tech",
                featureName: "Современные технологии защиты",
                iconUrl: icon1,
                subtitle: "Наша цель — перевернуть представление миллионов людей о системах безопасности и сделать жизнь спокойнее",
                title: "Круглосуточная защита вашей собственности и спокойствия",
            },
        ];
    }
}
