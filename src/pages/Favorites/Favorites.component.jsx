import React, { useContext } from 'react';
import VideoCard from '../../components/VideoCard';
import { GlobalContext } from '../../providers/Global';
import {
  MainSection,
  Title,
  VideosContainer,
  DeleteButton,
  H3,
  Wrapper,
} from './Favorite.styles';

const Favorites = () => {
  const { favoriteVideos, removeFavoriteVideo } = useContext(GlobalContext);

  const handleDelete = (item) => {
    const { id } = item;
    removeFavoriteVideo(id);
  };

  return (
    <MainSection>
      <Title>Favorites videos</Title>
      <VideosContainer>
        {favoriteVideos.length === 0 && <H3>There are not favorite videos to show</H3>}
        {favoriteVideos.map((item) => (
          <Wrapper key={item.id}>
            <VideoCard
              key={item.id}
              id={item.id}
              title={item.snippet.title}
              description={item.snippet.description}
              thumbnails={item.snippet.thumbnails}
              channelTitle={item.snippet.channelTitle}
            />
            <DeleteButton type="button" onClick={() => handleDelete(item)}>
              Delete
            </DeleteButton>
          </Wrapper>
        ))}
      </VideosContainer>
    </MainSection>
  );
};

export default Favorites;
