import React from 'react';

import { Container, Image, P, Return } from './NotFound.styles';

function NotFoundPage() {
  return (
    <Container className="not-found">
      <Return to="/" className="home-link">
        <i className="fas fa-home" />
        Go to home
      </Return>
      <Image src="404.gif" alt="page not found" />

      <P>Page not found 404</P>
    </Container>
  );
}

export default NotFoundPage;
