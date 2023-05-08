import { EPaths, TRoutes } from './types';
import { PageVacancies, PageFavorites } from './pages';

export const appRoutes: TRoutes = [
  {
    id: 1,
    path: EPaths.VACANCIES,
    title: 'Поиск Вакансий',
    component: PageVacancies,
  },
  {
    id: 2,
    path: EPaths.FAVORITES,
    title: 'Избранное',
    component: PageFavorites,
  },
];
