import ISlide from './ISlide';

export default interface ISlideShow<TSlide extends ISlide> {
    slides: TSlide[]
    currentSlide: number;
}
