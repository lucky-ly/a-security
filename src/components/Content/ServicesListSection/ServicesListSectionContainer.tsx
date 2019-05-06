import * as React from "react";

import { ServicesListSection } from './ServicesListSection';

import IDataProvider from 'src/data-providers/IDataProvider';

import { ServicesListDataProvider } from 'src/data-providers/ServicesListDataProvider';
import IParent from 'src/data-types/IParent';
import { IServiceDescription } from 'src/data-types/IServiceDescription';

// tslint:disable-next-line: no-empty-interface
export interface IServicesListSectionContainerProps extends IParent {
}

// tslint:disable-next-line: no-empty-interface
export interface IServicesListSectionContainerState {
}

export class ServicesListSectionContainer extends React.Component<IServicesListSectionContainerProps, IServicesListSectionContainerState> {
    private dataProvider: IDataProvider<IServiceDescription[]>;
    private data: IServiceDescription[];

    constructor(props: IServicesListSectionContainerProps) {
        super(props)
        this.dataProvider = new ServicesListDataProvider();
        this.data = this.dataProvider.getData();
        this.state = {
        };
    }

    public render = () => <ServicesListSection services={this.data}/>;
}
