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
            <VideoCard
              key={item.id.videoId}
              title={item.snippet.title}
              description={item.snippet.description}
              thumbnails={item.snippet.thumbnails}
              channelTitle={item.snippet.channelTitle}
            />
          ) : (
            <ChannelCard
              key={item.id.channelId}
              title={item.snippet.title}
              description={item.snippet.description}
              thumbnails={item.snippet.thumbnails}
              channelTitle={item.snippet.channelTitle}
            />
          )
        )}
      </VideosContainer>
    </SearchContainer>
  );
};

export default Search;
