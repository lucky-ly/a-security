import * as React from "react";
import { FeaturesSlideDataProvider } from "src/data-providers/FeaturesSlideDataProvider";
import { FeaturesSlideshowSection, IFeaturesSlideshowSlide } from '.';

export class FeaturesSlideshowSectionContainer extends React.Component {
    private slideshowDataProvider: FeaturesSlideDataProvider;
    private data: IFeaturesSlideshowSlide[];

    constructor(props: Readonly<{}>) {
        super(props)

        this.slideshowDataProvider = new FeaturesSlideDataProvider();
        this.data = this.slideshowDataProvider.getData();
    }
    
    public render() {

        return (
            <FeaturesSlideshowSection data={this.data}/>
        )
    }
}