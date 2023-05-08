import { FC } from 'react';

export enum EPaths {
  VACANCIES = '/',
  FAVORITES = '/favorites',
}

export interface IRoute {
  id: number;
  path: EPaths;
  title: string;
  component: FC;
}

export type TRoutes = IRoute[];
