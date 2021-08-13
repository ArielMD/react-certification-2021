import styled from 'styled-components';

export const RelatedVideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 30%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  width: 100%;
  margin: 1rem 0;

  @media (min-width: 1200px) {
    margin: 0 0 1rem 0;
  }
`;
