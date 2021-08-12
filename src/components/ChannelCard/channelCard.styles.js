import styled from 'styled-components';

export const ChannelWrapper = styled.div`
  width: 25rem;
  height: auto;
  padding-bottom: 1rem;
  margin: 1rem;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0px 2px 4px #00000050;
  cursor: pointer;
  background-color: ${(props) => props.theme.bgCardc};
  transition: transform 0.3s ease-in-out;
  display: flex;

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: 992px) {
    width: 20rem;
    height: 16rem;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  background-image: url(${(props) => props.thumbnails.high.url});
  width: 6rem;
  height: 6rem;
  background-size: cover;
  border-radius: 50%;
  margin: auto;
  @media (min-width: 992px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const InfoContainer = styled.div`
  margin: 0 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChannelTitle = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colorTitleCard};
  @media (min-width: 992px) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colorCard};
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
