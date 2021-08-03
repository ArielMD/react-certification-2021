import React from 'react';
import useRelatedVideos from '../../utils/hooks/useRelatedVideos';
import useQuery from '../../utils/hooks/useQuery';
import VideoCard from '../VideoCard';
import { RelatedVideosContainer, Title } from './RelatedVideos.styles';

const RelatedVideos = () => {
  const query = useQuery();
  const { videos, error } = useRelatedVideos(query.get('id'));

  return (
    <RelatedVideosContainer>
      {error && <h3>Error</h3>}
      <Title>Related Videos</Title>
      {videos?.items.map(
        (item) =>
          item.snippet && (
            <VideoCard
              key={item.id.videoId}
              id={item.id.videoId}
              title={item.snippet.title}
              description={item.snippet.description}
              thumbnails={item.snippet.thumbnails}
              channelTitle={item.snippet.channelTitle}
            />
          )
      )}
    </RelatedVideosContainer>
  );
};

export default RelatedVideos;
