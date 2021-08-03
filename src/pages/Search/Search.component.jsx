import React from 'react';
import VideoCard from '../../components/VideoCard';
import ChannelCard from '../../components/ChannelCard';
import useQuery from '../../utils/hooks/useQuery';
import useVideo from '../../utils/hooks/useVideo';
import { SearchContainer, VideosContainer, SearchResult, Error } from './search.styles';

const Search = () => {
  const query = useQuery();
  const { videos, error } = useVideo(query.get('search_query'));

  return (
    <SearchContainer>
      {error && <Error>Error loading the videos</Error>}
      <SearchResult>
        Search results: <strong>{query.get('search_query')}</strong>
      </SearchResult>
      <VideosContainer>
        {videos?.items.map((item) =>
          item.id.kind.match(/video/i) ? (
            <VideoCard key={item.id.videoId} video={item} />
          ) : (
            <ChannelCard key={item.id.channelId} channel={item} />
          )
        )}
      </VideosContainer>
    </SearchContainer>
  );
};

export default Search;
