import React from 'react';
import ChannelCard from '../../components/ChannelCard';
import Explore from '../../components/Explore';
import VideoCard from '../../components/VideoCard';
import YTVideos from '../../Mocks/youtube-videos-mock.json';

import { Title, MainSection, VideosContainer } from './Home.styles';

function HomePage() {
  return (
    <MainSection>
      <Title>Explore new videos</Title>
      <Explore />
      <VideosContainer>
        {YTVideos.items.map((item) =>
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
