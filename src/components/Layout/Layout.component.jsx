import React, { useContext } from 'react';

import { createGlobalStyle } from 'styled-components';
import { Container, Main } from './Layout.styles';
import Navigation from '../Navigation';
import Modal from '../Modal';
import { GlobalContext } from '../../providers/Global';

const GlobalStyle = createGlobalStyle`
  body{
    overflow: hidden;
  }
`;

function Layout({ children }) {
  const { isModalOpen } = useContext(GlobalContext);

  return (
    <Container>
      <Navigation />
      {isModalOpen && (
        <>
          <Modal />
          <GlobalStyle />
        </>
      )}
      <Main id="main-container">{children}</Main>
    </Container>
  );
}

export default Layout;
