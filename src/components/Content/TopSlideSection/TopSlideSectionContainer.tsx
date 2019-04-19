import * as React from "react";

import TopSlideSection from './TopSlideSection';

import IDataProvider from 'src/data-providers/IDataProvider';
import TopSlideDataProvider from "src/data-providers/TopSlideDataProvider";

import IParent from 'src/data-types/IParent';
import ISlideShow from 'src/data-types/Slideshow/ISlideShow';
import ITopSlideData from "src/data-types/Slideshow/ITopSlideData";

export default class TopSlideSectionContainer extends React.Component {
    private dataProvider: IDataProvider<ISlideShow<ITopSlideData>>;
    
    constructor(props: IParent) {
        super(props)

        const provider = new TopSlideDataProvider();

        this.dataProvider = provider;
    }

    public render() {
        return (
            <TopSlideSection slideShowData={this.dataProvider.getData()}/>
        )
    }
}
