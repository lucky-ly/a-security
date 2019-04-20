import * as React from "react";

import './SlidePreview.css';

import ITopSlideData from 'src/data-types/Slideshow/ITopSlideData';

export interface ISlidePreviewProps {
    data: ITopSlideData;
}

export default class SlidePreview extends React.Component<ISlidePreviewProps, any> {

    constructor(props: any) {
        super(props)

        this.state = {
        }
    }

    public render() {
        const data = this.props.data;

        const styles: React.CSSProperties = {
            backgroundImage: `url(${data.previewUrl ? data.previewUrl : data.backgroundUrl})`
        };

        return (
            <div className="slide-preview">
                <div className="slide-preview__header">
                    <div className="slide-preview__number">{data.number.toString().padStart(2, '0') + '.'}</div>
                    <div className="slide-preview__title">{data.title}</div>
                </div>
                <div className="slide-preview__image" style={styles}/>
            </div>
        );
    }
}
