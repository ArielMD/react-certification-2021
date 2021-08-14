import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

export const Main = styled.section`
  margin-top: 70px;
  background-color: #f7f7f8;
  min-height: calc(100vh - 70px);
  @media (min-width: 992px) {
    padding-left: 3.8rem;
  }
`;
