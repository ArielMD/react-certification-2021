import React from 'react';
import {
  VideoWrapper,
  Image,
  InfoContainer,
  ChannelTitle,
  Title,
  Description,
  LinkTo,
} from './videoCard.styles';

const VideoCard = ({ id, title, description, thumbnails, channelTitle, related }) => {
  return (
    <LinkTo to={`/video?id=${id}`}>
      <VideoWrapper related={related}>
        <Image thumbnails={thumbnails} related={related} />
        <InfoContainer>
          <Title>{title}</Title>
          <ChannelTitle>{channelTitle}</ChannelTitle>
          <Description>{description}</Description>
        </InfoContainer>
      </VideoWrapper>
    </LinkTo>
  );
};

export default VideoCard;
