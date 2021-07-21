import React from 'react';

import Container from './Layout.styles';
import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
}

export default Layout;
