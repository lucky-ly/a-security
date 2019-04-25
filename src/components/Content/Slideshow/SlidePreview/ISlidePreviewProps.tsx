import { ILoadable } from 'src/data-types/ILoadable';
import ITopSlideData from 'src/data-types/Slideshow/ITopSlideData';
export interface ISlidePreviewProps extends ILoadable {
    data: ITopSlideData;
}
