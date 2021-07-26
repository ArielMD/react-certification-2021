import React from 'react';
import {
  ChannelWrapper,
  Image,
  InfoContainer,
  ChannelTitle,
  Description,
} from './channelCard.styles';

const ChannelCard = ({ video }) => {
  const {
    snippet: { description, thumbnails, channelTitle },
  } = video;
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
