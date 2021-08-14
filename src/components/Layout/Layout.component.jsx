import React from 'react';

import { Container, Main } from './Layout.styles';
import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <Container>
      <Navigation />
      <Main id="main-container">{children}</Main>
    </Container>
  );
}

export default Layout;
