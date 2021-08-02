import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemWrapper = styled(Link)`
  width: 40%;
  height: 3rem;
  background-color: #00adff;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 1rem;
  text-decoration: none;
  position: relative;

  :hover {
    background-color: #0094db;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    width: 20%;
  }
`;

export const ItemName = styled.h3`
  color: white;
  font-size: 24px;
`;

export const ItemImage = styled.img`
  position: absolute;
  transform: translate(0, -1.8rem);
  width: 2.5rem;
  height: 2.5rem;
`;
