import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 16rem;
  height: auto;
  position: absolute;
  background-color: white;
  right: 0;
  top: 70px;
  box-shadow: 0px 2px 4px #00000050;
`;

export const UserInformation = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const UserPicture = styled.div`
  background-color: #4dc6ff;
  width: 40px;
  height: 40px;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.3rem;
  cursor: pointer;
  font-size: 1.8rem;
  color: white;
  margin-right: 1rem;
`;

export const Username = styled.h4`
  margin: 0px;
  font-size: 1.4rem;
`;

export const LineDivider = styled.hr`
  width: 14rem;
  margin: auto;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #b6e8ff;
  }
`;

export const OptionImage = styled.i`
  padding-right: 1rem;
  color: #0e0e01;
`;

export const OptionName = styled.p`
  font-size: 1.2rem;
`;

export const ToggleButton = styled.div``;
