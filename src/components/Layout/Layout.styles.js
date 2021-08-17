import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgPage};
`;

export const Main = styled.section`
  padding-top: 70px;
  @media (min-width: 992px) {
    padding-left: 3.8rem;
  }
`;
