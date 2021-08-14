import React, { useState } from 'react';
import RelatedVideos from '../../components/RelatedVideos';
import useQuery from '../../utils/hooks/useQuery';
import useVideoDetails from '../../utils/hooks/useVideoDetails';
import {
  Container,
  VideoDetailsContainer,
  VideoPlayer,
  Details,
  ControlContainer,
  Button,
  Title,
  Icon,
  Label,
  Channel,
  Description,
  DescriptionButton,
} from './videoDetails.styles';

const VideoDetails = () => {
  const [isExtendedDescription, setIsExtendedDescription] = useState(false);
  const { queryId } = useQuery();
  const { video } = useVideoDetails(queryId);

  const handleDescription = () => {
    setIsExtendedDescription((prevState) => !prevState);
  };
  return (
    <Container>
      <VideoDetailsContainer>
        <VideoPlayer
          src={`https://www.youtube.com/embed/${queryId}?autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        />
        <Details>
          <Title>{video?.snippet.localized.title}</Title>
          <ControlContainer>
            <Button>
              <Icon className="far fa-eye" />
              <Label>{video?.statistics.viewCount}</Label>
            </Button>
            <Button>
              <Icon className="fas fa-thumbs-up" />
              <Label>{video?.statistics.likeCount}</Label>
            </Button>
            <Button>
              <Icon className="fas fa-thumbs-down" />
              <Label>Dislike</Label>
            </Button>
            <Button>
              <Icon className="fas fa-heart" />
              <Label>Favorite</Label>
            </Button>
          </ControlContainer>
          <div>
            <Channel>{video?.snippet.channelTitle}</Channel>
            <Description className={isExtendedDescription && 'extended'}>
              {video?.snippet.description}
            </Description>
            <DescriptionButton onClick={handleDescription}>
              <strong>{isExtendedDescription ? 'show less' : 'show more'}</strong>
            </DescriptionButton>
          </div>
        </Details>
        <div>
          <h4>Comments comming soon</h4>
        </div>
      </VideoDetailsContainer>
      <RelatedVideos />
    </Container>
  );
};

export default VideoDetails;
