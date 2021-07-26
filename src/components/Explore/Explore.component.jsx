import React from 'react';
import ExploreItem from '../ExploreItem';
import { ExploreContainer } from './explore.styles';
import { items } from '../../Mocks/explore-mocks';

const Explore = () => {
  return (
    <ExploreContainer>
      {items.map((item) => {
        return <ExploreItem key={item.id} item={item} />;
      })}
    </ExploreContainer>
  );
};

export default Explore;
