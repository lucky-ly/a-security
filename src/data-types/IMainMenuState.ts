import IMenuItem from './IMenuItem';

export default interface IMainMenuState {
    menuItems: IMenuItem[],
    footerItems: IMenuItem[],
}