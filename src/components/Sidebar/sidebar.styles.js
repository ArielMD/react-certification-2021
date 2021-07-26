import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.aside`
  position: absolute;
  width: 15rem;
  height: calc(100% - 70px);
  top: 70px;
  background-color: #efeff1;
  border-radius: 0 1rem 1rem 0;
  transform: translate(0);
  transition: transform 0.4s ease-in-out;
  z-index: 100;

  &.hidden {
    transform: translate(-100%);
  }

  @media (min-width: 992px) {
    transition: width 0.4s ease-in-out;
    &.hidden {
      transform: translateX(0);
      width: 4rem;
      overflow: hidden;
    }
  }
`;

export const ItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  margin: 0.5rem 0;

  &:hover {
    background-color: #b6e8ff;
  }
`;

export const ItemIcon = styled.i`
  font-size: 1.6rem;
  color: #303537;
`;

export const ItemName = styled.p`
  font-size: 1.3rem;
  color: #303537;
  margin-left: 1.1rem;
`;
