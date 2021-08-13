import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoWrapper = styled.div`
  display: flex;
  margin: 1rem 1rem;
  background-color: ${(props) => props.theme.bgCard};

  @media (min-width: 992px) {
    /* width: 20rem;
    height: 16rem; */
  }
`;

export const Image = styled.img`
  width: 10rem;
  /* @media (min-width: 992px) {
    height: 70%;
  } */
`;

export const InfoContainer = styled.div`
  padding: 0 1rem 0 1rem;
  flex: 1;
  padding-left: 1rem;
`;

export const ChannelTitle = styled.p`
  color: ${(props) => props.theme.colorCard};
  font-size: 14px;
`;

export const Title = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colorTitleCard};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (min-width: 992px) {
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colorCard};
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
`;
