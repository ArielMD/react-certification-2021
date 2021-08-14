import React from 'react';
import {
  VideoWrapper,
  Image,
  InfoContainer,
  ChannelTitle,
  Title,
  Description,
  LinkTo,
} from './RelatedVideoCard.styles';

const RelatedVideoCard = ({
  id,
  title,
  description,
  thumbnails,
  channelTitle,
  related,
}) => {
  return (
    <LinkTo to={`/video?id=${id}`}>
      <VideoWrapper related={related}>
        <Image src={thumbnails?.high.url} related={related} loading="lazy" />
        <InfoContainer>
          <Title>{title}</Title>
          <ChannelTitle>{channelTitle}</ChannelTitle>
          <Description>{description}</Description>
        </InfoContainer>
      </VideoWrapper>
    </LinkTo>
  );
};

export default RelatedVideoCard;
