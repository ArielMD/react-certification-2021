import React from 'react';
import {
  VideoWrapper,
  Image,
  InfoContainer,
  ChannelTitle,
  Title,
  Description,
} from './videoCard.styles';

const VideoCard = ({ video }) => {
  const {
    snippet: { title, description, thumbnails, channelTitle },
  } = video;
  return (
    <VideoWrapper>
      <Image thumbnails={thumbnails} />
      <InfoContainer>
        <Title>{title}</Title>
        <ChannelTitle>{channelTitle}</ChannelTitle>
        <Description>{description}</Description>
      </InfoContainer>
    </VideoWrapper>
  );
};

export default VideoCard;
