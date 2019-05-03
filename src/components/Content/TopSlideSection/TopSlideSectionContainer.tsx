import * as React from "react";

import { TopSlideSection } from './TopSlideSection';

import IDataProvider from 'src/data-providers/IDataProvider';
import TopSlideDataProvider from "src/data-providers/TopSlideDataProvider";

import { ILoadable } from 'src/data-types/ILoadable';
import IParent from 'src/data-types/IParent';
import ITopSlideData from "src/data-types/Slideshow/ITopSlideData";

export interface ITopSliderSectionContainerProps extends IParent, ILoadable {

}

// tslint:disable-next-line: no-empty-interface
export interface ITopSliderSectionContainerState extends ILoadable {
}

export class TopSlideSectionContainer extends React.Component<ITopSliderSectionContainerProps, ITopSliderSectionContainerState> {
    private dataProvider: IDataProvider<ITopSlideData[]>;
    
    constructor(props: ITopSliderSectionContainerProps) {
        super(props)

        const provider = new TopSlideDataProvider();

        this.dataProvider = provider;
        this.state = {
            isLoaded: props.isLoaded,
        };
    }

    public componentWillReceiveProps = (nextProps: ITopSliderSectionContainerProps) => {
        this.setState({ isLoaded: nextProps.isLoaded });
    }

    public render() {
        return (
            <TopSlideSection isLoaded={this.state.isLoaded} slideShowData={this.dataProvider.getData()}/>
        )
    }
}
