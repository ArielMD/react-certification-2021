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

export const H3 = styled.h3`
  color: ${(props) => props.theme.title};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > :first-child {
    > :first-child {
      border-end-end-radius: 0;
      border-end-start-radius: 0;
      :hover {
        transform: scale(1);
      }
    }
  }
`;

export const DeleteButton = styled.button`
  margin-top: -1rem;
  border-radius: 0.2rem;
  width: 25rem;
  padding: 0.2rem;
  font-size: 1.2rem;
  background-color: red;
  border: none;
  color: white;
  cursor: pointer;

  @media (min-width: 992px) {
    width: 20rem;
  }
`;
