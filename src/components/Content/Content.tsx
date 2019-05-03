import * as React from 'react';

import './Content.css';

import { ILoadable } from 'src/data-types/ILoadable';
import { FeaturesSlideshowSectionContainer } from './FeaturesSlideshowSection';
import { TopSlideSectionContainer } from './TopSlideSection';

// tslint:disable-next-line: no-empty-interface
interface IContentProps extends ILoadable {

}

// tslint:disable-next-line: no-empty-interface
interface IContentState extends ILoadable {

}

class Content extends React.Component<IContentProps,IContentState> {
    constructor(props: IContentProps) {
        super(props);
        this.state = {
            isLoaded: props.isLoaded
        }
    }

    public componentWillReceiveProps = (nextProps: IContentProps) => {
        this.setState({ isLoaded: nextProps.isLoaded });
    }

    public render() {
        return (
            <div className="content-root">
                <TopSlideSectionContainer isLoaded={this.state.isLoaded}/>
                <div className="content-root__padded">
                    <FeaturesSlideshowSectionContainer/>
                </div>
            </div>
        );
    }
}

export default Content;
