import * as React from "react";
import { FeaturesSlideDataProvider } from "src/data-providers/FeaturesSlideDataProvider";
import { FeaturesSlideshowSection, IFeaturesSlideshowSlide } from '.';

import { featuresSlideshow as Strings } from 'src/data-providers/Strings';
import mainImage from '../../../assets/images/photo/features-slideshow/image.jpg';

export class FeaturesSlideshowSectionContainer extends React.Component {
    private slideshowDataProvider: FeaturesSlideDataProvider;
    private slides: IFeaturesSlideshowSlide[];

    constructor(props: Readonly<{}>) {
        super(props)

        this.slideshowDataProvider = new FeaturesSlideDataProvider();
        this.slides = this.slideshowDataProvider.getData();
    }
    
    public render() {

        return (
            <FeaturesSlideshowSection
                slides={this.slides}
                mainImageUrl={mainImage}
                title={Strings.title}
                subtitle={Strings.subtitle}
                detailsUrl="#/about"
                detailsText={Strings.detailsText}
                />
        )
    }
}