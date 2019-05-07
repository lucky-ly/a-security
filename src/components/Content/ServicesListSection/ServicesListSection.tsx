import * as React from "react";

import "./ServicesListSection.css";

import { servicesList as Strings } from "src/data-providers/Strings"
import IParent from "src/data-types/IParent";
import { IServiceDescription } from 'src/data-types/IServiceDescription';
import { ActionButton } from '../Buttons/ActionButton';
import { Card } from '../Card';
import { ContentSection } from "../ContentSection";
import { ServiceCard } from '../ServiceCard';

export interface IServicesListSectionProps extends IParent {
    services?: IServiceDescription[];
}

// tslint:disable-next-line: no-empty-interface
export interface IServicesListSectionState {
}

export class ServicesListSection extends React.Component<IServicesListSectionProps, IServicesListSectionState> {
    private services: IServiceDescription[];

    constructor(props: IServicesListSectionProps) {
        super(props)

        this.services = props.services ? props.services : [];
        this.state = {};
    }

    public render() {
        const cards = this.services.map((service: IServiceDescription, index: number) => {
            return <ServiceCard key={index} data={service} />;
        });

        return (
            <ContentSection id="services-list" className="services-list">
                <Card className="services-list__title">
                    {Strings.title}
                </Card>
                {cards}
                <Card className="services-list__form-link">
                    <div className="form-link__title">{Strings.formLinkTitle}</div>
                    <div className="form-link__subtitle">{Strings.formLinkSubtitle}</div>
                    <ActionButton text="Оставить заявку" url="#/place-order" width="100%"/>
                </Card>
            </ContentSection>
        )
    }
}
