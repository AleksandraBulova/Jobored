import { FC, PropsWithChildren } from 'react';
import { AppShell } from '@mantine/core';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <AppShell>{children}</AppShell>;
};
