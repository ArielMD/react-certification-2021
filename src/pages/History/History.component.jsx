import React, { useContext } from 'react';
import VideoCard from '../../components/VideoCard';
import {
  MainSection,
  Title,
  VideosContainer,
  H3,
  Wrapper,
  DeleteButton,
} from './History.styles';
import { GlobalContext } from '../../providers/Global';

const History = () => {
  const { history, removeHistory } = useContext(GlobalContext);

  const handleDelete = (item) => {
    const { id } = item;
    removeHistory(id);
  };

  return (
    <MainSection>
      <Title>History videos</Title>
      <VideosContainer>
        {history.length === 0 && <H3>There are not videos to show</H3>}
        {history.map((item) => (
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

export default History;
