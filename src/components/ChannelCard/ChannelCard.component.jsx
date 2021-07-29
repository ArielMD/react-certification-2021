import React from 'react';
import {
  ChannelWrapper,
  Image,
  InfoContainer,
  ChannelTitle,
  Description,
} from './channelCard.styles';

const ChannelCard = ({ channel }) => {
  const {
    snippet: { description, thumbnails, channelTitle },
  } = channel;
  return (
    <ChannelWrapper>
      <Image thumbnails={thumbnails} />
      <InfoContainer>
        <ChannelTitle>{channelTitle}</ChannelTitle>
        <Description>{description}</Description>
      </InfoContainer>
    </ChannelWrapper>
  );
};

export default ChannelCard;
