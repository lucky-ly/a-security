import IParent from 'src/data-types/IParent';
import ISlideShow from 'src/data-types/Slideshow/ISlideShow';
import ITopSlideData from 'src/data-types/Slideshow/ITopSlideData';
export interface ITopSlideSectionProps extends IParent {
    slideShowData: ISlideShow<ITopSlideData>;
}
