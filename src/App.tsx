import React from 'react';
import styled from 'styled-components';
import { Counter, Footer, ThemeEnum } from '@/module';

export const App = () => (
  <AppContainer>
    <Counter theme={ThemeEnum.Light} />
    <br />
    <Counter theme={ThemeEnum.Dark} />
    <br />
    <Counter theme={ThemeEnum.Dark} value={1000} />
    <AppFooter>
      <Footer />
    </AppFooter>
  </AppContainer>
);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AppFooter = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
`;
