import React from 'react';

import Container from './Layout.styles';
import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <Container>
      <Navigation />
      <div id="main-container">{children}</div>
    </Container>
  );
}

export default Layout;
