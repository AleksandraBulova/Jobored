import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { MainLayout } from './layouts/MainLayout';
import { appRoutes } from './routes';
import { Page404 } from './pages';

const AppTheme: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  colors: {
    white: ['#FFFFFF'],
    black: ['#232134'],
    gray: ['#F7F7F8', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88'],
    blue: ['#DEECFF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC', '#3B7CD3'],
  },
  fontSizes: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '1.75rem',
  },
  radius: {
    xs: '0.25rem',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.625rem',
    xl: '0.75rem',
  },
  spacing: {
    '4xs': '0.25rem',
    '3xs': '0.5rem',
    xxs: '0.75rem',
    xs: '1rem',
    sm: '1.25rem',
    md: '1.75rem',
    lg: '2rem',
    xl: '2.5rem',
    xxl: '3.75rem',
  },
};

export const App: FC = () => {
  return (
    <MantineProvider theme={AppTheme} withGlobalStyles withNormalizeCSS>
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
    </MantineProvider>
  );
};
