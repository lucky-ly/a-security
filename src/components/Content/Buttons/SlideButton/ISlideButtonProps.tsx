import { SlideButtonType } from '.';

export interface ISlideButtonProps {
    children?: React.ReactNode;
    url: string;
    type: SlideButtonType;
    text: string;
}
