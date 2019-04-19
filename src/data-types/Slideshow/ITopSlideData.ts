import ISlide from './ISlide';

export default interface ITopSlideData extends ISlide {
    actionText: string;
    descriptionText: string;
    number: number;
    title: string;
    subtitle: string | string[];
    actionUrl: string;
    descriptionUrl: string;
}
