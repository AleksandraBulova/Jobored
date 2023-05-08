import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { appRoutes } from './routes';
import { Page404 } from './pages';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={<route.component />} />
          ))}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
