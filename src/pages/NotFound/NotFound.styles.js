import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Return = styled(Link)`
  font-size: 1.5rem;
  margin-top: 4rem;
  color: ${(props) => props.theme.title};

  :hover {
    color: ${(props) => props.theme.primaryColor};
  }

  i {
    margin-right: 0.5rem;
  }
`;

export const Image = styled.img`
  border-radius: 100%;
  margin: 10%;
  width: 40%;
`;

export const P = styled.p`
  font-size: 2.5rem;
  color: ${(props) => props.theme.title};
`;
