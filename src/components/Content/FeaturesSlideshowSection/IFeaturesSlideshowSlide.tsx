import ISlide from 'src/data-types/Slideshow/ISlide';
export interface IFeaturesSlideshowSlide extends ISlide {
    title: string;
    subtitle: string | string[];
    detailsUrl: string;
    featureName: string;
    iconUrl: string;
    imageAlt?: string;
}
