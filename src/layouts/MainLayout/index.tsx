import { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { AppShell } from '@mantine/core';
import { Header } from '../../components';

const StyledAppShell = styled(AppShell)`
  background: ${({ theme }) => theme.colors.gray[0]};

  .mantine-AppShell-main {
    padding: 7.75rem 2.5rem 2.75rem 2.5rem;
    max-width: 74.75rem;
    margin: auto;
  }
`;

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <StyledAppShell header={<Header />}>{children}</StyledAppShell>;
};
