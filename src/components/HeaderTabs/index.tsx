import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { Tabs } from '@mantine/core';
import { appRoutes } from '../../routes';

const StyledTabs = styled(Tabs)`
  .mantine-Tabs-tabsList {
    display: flex;
    gap: 0 ${({ theme }) => theme.spacing.xxl};
  }

  .mantine-Tabs-tab {
    border: none;
    padding: 0;
    background: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black[1]};

    .mantine-Tabs-tabLabel {
      font-family: 'Inter', sans-serif;
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }

    &:active {
      color: ${({ theme }) => theme.colors.blue[4]};

      .mantine-Tabs-tabLabel {
        font-weight: 500;
      }
    }

    &[data-active='true'] {
      color: ${({ theme }) => theme.colors.blue[4]};

      .mantine-Tabs-tabLabel {
        font-weight: 500;
      }
    }
  }
`;

export const HeaderTabs: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledTabs unstyled value={pathname} onTabChange={(value: string) => value && navigate(value)}>
      <Tabs.List>
        {appRoutes.map((route) => (
          <Tabs.Tab key={route.id} value={route.path}>
            {route.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </StyledTabs>
  );
};
