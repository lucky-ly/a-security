import { isArray } from 'util';

export const featuresSlideshow = {
    detailsText: "Подробнее о компании",
    subtitle: "Наша цель — перевернуть представление миллионов людей о системах безопасности и сделать жизнь спокойнее",
    title: "Круглосуточная защита вашей собственности и\u00a0спокойствия",
};

export const servicesList = {
    formLinkSubtitle:"Мы бесплатно подберем оптимальный комплект безопасности, учитывая особенности вашего объекта.",
    formLinkTitle:"Заполните онлайн форму за\u00a0пару кликов",
    title: "Наши услуги",
}

export class Helpers {
    public static formatSubtitle(params: string | string[]) {
        return isArray(params) ? params.join('\u00a0 —\u00a0\u00a0') : params;
    }

    public static formatNumber(num: number) {
        return num.toString().padStart(2, '0') + '.';
    }
}