import styled from 'styled-components';

export const MainSection = styled.main`
  background-color: #f7f7f8;
  width: 100%;
  margin-top: 70px;
  @media (min-width: 992px) {
    padding-left: 4rem;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  padding: 1rem 0;
`;

export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
