import * as React from "react";

import "./ServiceCard.css";

import { Helpers } from "src/data-providers/Strings";
import { IServiceDescription } from "src/data-types/IServiceDescription";
import { DetailsButton } from "../Buttons/DetailsButton";
import { Card } from "../Card";

// tslint:disable-next-line: no-empty-interface
export interface IServiceCardProps {
    data: IServiceDescription;
}

export const ServiceCard = ({ data }: IServiceCardProps) => {
    return (
        <Card className="service-card">
            <div className="service-card__content">
                <img src={data.iconUrl} className="service-card__icon"/>
                <DetailsButton text="Подробнее" url={data.detailsUrl} color="#ffffff" inline={true}/>
                <div className="service-card__subtitle">{Helpers.formatSubtitle(data.subtitle)}</div>
                <div className="service-card__title">{data.title}</div>
                <div className="service-card__number">{Helpers.formatNumber(data.number)}</div>
            </div> 
        </Card>
    );
};
// 4066-1760-160
// 4066-1600
/*
480+40*n+194+392
*/