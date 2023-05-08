import { FC } from 'react';
import styled from '@emotion/styled';
import { Center, Container, Flex, Header as MantineHeader, Text } from '@mantine/core';
import { HeaderTabs } from '../HeaderTabs';
import { LogoIcon } from '../../assets/images';

const StyledHeader = styled(MantineHeader)`
  border-bottom: none;

  .mantine-Text-root {
    color: ${({ theme }) => theme.colors.black[0]};
  }
`;

const LogoText = styled(Text)`
  color: ${({ theme }) => theme.colors.black[0]};
  font-family: 'Poppins';
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  letter-spacing: -0.02em;
`;

export const Header: FC = () => {
  return (
    <StyledHeader height={84}>
      <Container maw="74.75rem" h="100%" pl="2.5rem" pr="2.5rem">
        <Center h="100%" mx="auto" pos="absolute">
          <Flex columnGap="xxs" align="center">
            <LogoIcon />
            <LogoText>Jobored</LogoText>
          </Flex>
        </Center>
        <Flex align="center" justify="center" h="100%">
          <HeaderTabs />
        </Flex>
      </Container>
    </StyledHeader>
  );
};
