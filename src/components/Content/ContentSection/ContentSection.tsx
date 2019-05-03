import * as React from "react";

import "./ContentSection.css";

import IParent from 'src/data-types/IParent';

export interface IContentSectionProps extends IParent {
    id?: string;
    className?: string;
}

export const ContentSection = (props: IContentSectionProps) => {
    return <section className={`content-section ${props.className ? props.className : ""}`} id={props.id ? props.id : ""}>{props.children}</section>;
};
export const ContentSectionFlex = (props: IContentSectionProps) => {
    return <section className={`content-section content-section-flex ${props.className ? props.className : ""}`} id={props.id ? props.id : ""}>{props.children}</section>;
};

export const ContentSectionWide = (props: IContentSectionProps) => {
    return <section className={`content-section content-section-wide ${props.className ? props.className : ""}`} id={props.id ? props.id : ""}>{props.children}</section>;
};

export const ContentSectionWideFlex = (props: IContentSectionProps) => {
    return <section className={`content-section content-section-wide content-section-flex ${props.className ? props.className : ""}`} id={props.id ? props.id : ""}>{props.children}</section>;
};
