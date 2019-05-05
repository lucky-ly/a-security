import { IFeaturesSlideshowSlide } from 'src/components/Content/FeaturesSlideshowSection/IFeaturesSlideshowSlide';
import IDataProvider from './IDataProvider';

import icon1 from '../assets/images/photo/features-slideshow/icon-1.svg';

export class FeaturesSlideDataProvider implements IDataProvider<IFeaturesSlideshowSlide[]> {
    public getData(arg: void): IFeaturesSlideshowSlide[] {
        return [
            {
                featureName: "Современные технологии защиты",
                imageUrl: icon1,
            },
        ];
    }
}
