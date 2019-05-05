import * as React from "react";

import './SlidePreview.css';

import { CSSTransition } from 'react-transition-group';
import { ISlidePreviewProps } from './ISlidePreviewProps';

export class SlidePreview extends React.Component<ISlidePreviewProps, any> {

    constructor(props: ISlidePreviewProps) {
        super(props)

        this.state = {
            isLoaded: props.isLoaded
        }
    }

    public componentWillReceiveProps = (nextProps: ISlidePreviewProps) => {
        this.setState({ isLoaded: nextProps.isLoaded });
    }

    public render() {
        const data = this.props.data;
        const timeoutMs = 400;

        const styles: React.CSSProperties = {
            backgroundImage: `url(${data.previewUrl ? data.previewUrl : data.imageUrl})`,
            transition: `width ${timeoutMs}ms ease-out`,
        };

        const transitionStyles: React.CSSProperties = {
            transition: `color ${timeoutMs}ms ease-out`,
        }

        return (
            <div className="slide-preview">
                <CSSTransition in={this.state.isLoaded} timeout={timeoutMs} style={transitionStyles} classNames="slide-preview__header" appear={true}>
                    <div className="slide-preview__header">
                        <div className="slide-preview__number">{data.number.toString().padStart(2, '0') + '.'}</div>
                        <div className="slide-preview__title">{data.title}</div>
                    </div>
                </CSSTransition>
                <CSSTransition in={this.state.isLoaded} timeout={timeoutMs} style={styles} classNames="slide-preview__image" appear={true}>
                    <div className="slide-preview__image" style={styles}/>
                </CSSTransition>
            </div>
        );
    }
}
