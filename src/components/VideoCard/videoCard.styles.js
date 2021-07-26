import styled from 'styled-components';

export const VideoWrapper = styled.div`
  width: 25rem;
  height: auto; //20rem
  padding-bottom: 1rem;
  margin: 1rem 1rem;
  border-radius: 1.5rem;
  box-shadow: 0px 2px 4px #00000050;
  cursor: pointer;
  background-color: white;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: 992px) {
    width: 20rem;
    height: 16rem;
  }
`;

export const Image = styled.img`
  background-image: url(${(props) => props.thumbnails.high.url});
  width: 100%;
  height: 14.3rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0rem;
  border-radius: 1.5rem 1.5rem 0 0;
  @media (min-width: 992px) {
    height: 70%;
  }
`;

export const InfoContainer = styled.div`
  margin: 0 1rem;
`;

export const ChannelTitle = styled.p`
  color: #53535f;
  font-size: 14px;
`;
export const Title = styled.p`
  font-size: 18px;

  @media (min-width: 992px) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;
export const Description = styled.p`
  color: #53535f;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
