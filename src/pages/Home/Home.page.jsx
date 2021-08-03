import React from 'react';
import ChannelCard from '../../components/ChannelCard';
import Explore from '../../components/Explore';
import VideoCard from '../../components/VideoCard';
import useVideos from '../../utils/hooks/useVideo';

import { Title, MainSection, VideosContainer, Error } from './Home.styles';

function HomePage() {
  const { videos, error } = useVideos('wizeline');
  return (
    <MainSection>
      {error && <Error>Error loading the videos</Error>}
      <Title>Explore new videos</Title>
      <Explore />
      <VideosContainer>
        {videos?.items.map((item) =>
          item.id.kind.match(/video/i) ? (
            <VideoCard key={item.id.videoId} video={item} />
          ) : (
            <ChannelCard key={item.id.channelId} channel={item} />
          )
        )}
      </VideosContainer>
    </MainSection>
  );
}

export default HomePage;
