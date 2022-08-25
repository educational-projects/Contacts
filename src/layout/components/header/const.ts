import { AppRoute } from '../../../const';

export const MenuType = {
  Main: {
    title: 'Главная',
    link: AppRoute.Main,
  },
  Contacts: {
    title: 'Контакты',
    link: AppRoute.Contacts,
  },
} as const;
