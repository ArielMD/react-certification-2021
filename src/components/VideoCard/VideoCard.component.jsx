import React from 'react';
import {
  VideoWrapper,
  Image,
  InfoContainer,
  ChannelTitle,
  Title,
  Description,
} from './videoCard.styles';

const VideoCard = ({ title, description, thumbnails, channelTitle, related }) => {
  return (
    <VideoWrapper related>
      <Image thumbnails={thumbnails} related={related} />
      <InfoContainer>
        <Title>{title}</Title>
        <ChannelTitle>{channelTitle}</ChannelTitle>
        <Description>{description}</Description>
      </InfoContainer>
    </VideoWrapper>
  );
};

export default VideoCard;
