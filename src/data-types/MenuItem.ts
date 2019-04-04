export interface IMenuItem {
    Link: string;
    Text: string;
}

export default class MenuItem implements IMenuItem {
    public Link: string;
    public Text: string;
    public IsSelected: boolean;
}