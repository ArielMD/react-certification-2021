import React from 'react';
import { ItemWrapper, ItemName, ItemImage } from './ExploreItem.styles';

const ExploreItem = ({ item }) => {
  return (
    <ItemWrapper to={item.url}>
      <ItemImage src={item.image} alt={item.name} />
      <ItemName>{item.name}</ItemName>
    </ItemWrapper>
  );
};

export default ExploreItem;
