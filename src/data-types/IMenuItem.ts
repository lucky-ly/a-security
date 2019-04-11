import ITitled from './ITitled';
import MenuItemTypeEnum from './MenuItemTypeEnum';

export default interface IMenuItem extends ITitled {
    link: string;
    text: string;
    itemType?: MenuItemTypeEnum
}
