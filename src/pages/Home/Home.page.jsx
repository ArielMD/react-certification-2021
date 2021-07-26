import React from 'react';
import Explore from '../../components/Explore';

import { Title, MainSection } from './Home.styles';

function HomePage() {
  return (
    <MainSection>
      <Title>Explore new videos</Title>
      <Explore />
    </MainSection>
  );
}

export default HomePage;
