import IParent from 'src/data-types/IParent';
export interface IContactsWidgetProps extends IParent {
    phoneNumber: string;
    callBackUrl: string;
    placeOrderUrl: string;
}
