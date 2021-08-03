import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 3rem 3rem 0 3rem;
`;
export const VideoDetailsContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  @media (min-width: 992px) {
    width: 75%;
  }
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
    height: 28rem;
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
  @media (min-width: 576px) {
    font-size: 1.4rem;
  }
`;

export const Label = styled.label`
  font-size: 1.1rem;
  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

export const Channel = styled.p`
  width: 100%;
  margin: 0.4rem 0;
  font-size: 1.4rem;
`;

export const Description = styled.p``;
