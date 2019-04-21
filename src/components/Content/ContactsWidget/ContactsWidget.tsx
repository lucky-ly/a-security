import * as React from 'react';

import './ContactsWidget.css';

import IParent from 'src/data-types/IParent';
import VerticalSliderButton from '../VerticalSliderButton';

interface IContactsWidgetProps extends IParent {
    phoneNumber: string;
    callBackUrl: string;
    placeOrderUrl: string;
}

export default function ContactsWidget(props: IContactsWidgetProps) {
    return (
        <React.Fragment>
            <div className="contacts-widget__phone-number">{props.phoneNumber}</div>
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