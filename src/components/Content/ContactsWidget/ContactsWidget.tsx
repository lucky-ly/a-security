import * as React from 'react';

import './ContactsWidget.css';

import IParent from 'src/data-types/IParent';

interface IContactsWidgetProps extends IParent {
    phoneNumber: string;
    callBackUrl: string;
    placeOrderUrl: string;
}

export default function ContactsWidget(props: IContactsWidgetProps) {
    return (
        <React.Fragment>
            <div className="contacts-widget__phone-number">{props.phoneNumber}</div>
            <div className="contacts-widget__slider contacts-widget__slider_call-back">
                <div className="slider__icon">
                    #
                </div>
                <div className="slider__text">
                    <a href={props.placeOrderUrl}>Обратный звонок</a>
                </div>
            </div>
            <div className="contacts-widget__slider contacts-widget__slider_place-order">
                <div className="slider__icon">
                    #
                </div>
                <div className="slider__text">
                    <a href={props.placeOrderUrl}>Заказать услугу</a>
                </div>
            </div>
        </React.Fragment>
    );
}