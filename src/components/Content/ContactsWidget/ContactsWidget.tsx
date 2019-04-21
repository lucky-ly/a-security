import * as React from 'react';

import './ContactsWidget.css';

import { VerticalSliderButton } from '../VerticalSliderButton';
import { IContactsWidgetProps } from './IContactsWidgetProps';

export function ContactsWidget(props: IContactsWidgetProps) {
    return (
        <React.Fragment>
            <a href={`tel:${props.phoneNumber}`} className="contacts-widget__phone-number">{phoneFormatted(props.phoneNumber)}</a>
            <VerticalSliderButton
                url={props.callBackUrl}
                text="Обратный звонок"
                backroundColor="#302F41">#</VerticalSliderButton>
            <VerticalSliderButton
                url={props.placeOrderUrl}
                text="Заказать услугу"
                backroundColor="#6F6AFF">#</VerticalSliderButton>
        </React.Fragment>
    );
}

function phoneFormatted(phoneNumber: string): string {
    const country = phoneNumber.slice(0, 2);
    const city = phoneNumber.slice(2, 5);
    const num = phoneNumber.slice(5);
    return (`${country} (${city}) ${num.slice(0, 3)}-${num.slice(3, 5)}-${num.slice(5)}`);
}