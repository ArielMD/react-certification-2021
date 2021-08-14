import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoWrapper = styled.div`
  display: flex;
  margin: 1rem 1rem;
  background-color: ${(props) => props.theme.bgCard};
`;

export const Image = styled.img`
  width: 25%;
  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export const InfoContainer = styled.div`
  padding: 0 1rem 0 1rem;
  padding-left: 1rem;
  @media (min-width: 1200px) {
    width: 60%;
  }
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
  width: 100%;
`;
