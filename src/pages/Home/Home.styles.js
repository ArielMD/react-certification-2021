import styled from 'styled-components';

export const MainSection = styled.main`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  padding: 1rem 0;
  color: ${(props) => props.theme.title};
`;

export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Error = styled.div`
  background-color: red;
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;
