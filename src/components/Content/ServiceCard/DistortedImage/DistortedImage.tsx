import * as React from "react";

import "./DistortedImage.css";

// tslint:disable-next-line: no-empty-interface
export interface IDistortedImageProps {
}

// tslint:disable-next-line: no-empty-interface
export interface IDistortedImageState {
}

export class DistortedImage extends React.Component<IDistortedImageProps, IDistortedImageState> {

    constructor(props: IDistortedImageProps) {
        super(props)

        this.state = {
        }
    }

    public render() {
        return (
            <div>!</div>
        )
    }
}
