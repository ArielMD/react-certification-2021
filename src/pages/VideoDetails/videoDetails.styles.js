import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 0 3rem;
  background-color: ${(props) => props.theme.bgPage};
  color: ${(props) => props.theme.title};
  min-height: calc(100vh - 70px);
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const VideoDetailsContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 15rem;

  @media (min-width: 576px) {
    height: 20rem;
  }

  @media (min-width: 768px) {
    height: 24rem;
  }

  @media (min-width: 992px) {
    height: 35rem;
  }
`;

export const Details = styled.div`
  padding: 1rem;
`;

export const Title = styled.p`
  width: 100%;
  font-size: 1.3rem;
  text-align: center;
`;

export const ControlContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const Icon = styled.i`
  margin-right: 0.3rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.title};
  @media (min-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const Label = styled.label`
  font-size: 0.8rem;
  color: ${(props) => props.theme.title};
`;

export const Channel = styled.p`
  width: 100%;
  margin: 0.4rem 0;
  font-size: 1.4rem;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  white-space: pre-line;
`;
