import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: ${(props) => props.theme.bgPage};
  min-height: calc(100vh - 70px);
`;

export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchResult = styled.p`
  padding: 1rem 0;
  text-align: center;
  color: ${(props) => props.theme.title};
`;

export const Error = styled.div`
  background-color: red;
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;
