import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 16rem;
  height: auto;
  position: absolute;
  background-color: ${(props) => props.theme.bgProfile};
  color: ${(props) => props.theme.colorProfile};
  right: 0;
  top: 70px;
  box-shadow: 0px 2px 4px #00000050;
  z-index: 10;

  &.profile-container-enter {
    opacity: 0;
  }
  &.profile-container-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  &.profile-container-exit {
    opacity: 1;
  }
  &.profile-container-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

export const UserInformation = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const UserPicture = styled.img`
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
    background-color: ${(props) => props.theme.HoverProfile};
  }
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colorProfile};
`;

export const OptionImage = styled.i`
  padding-right: 1rem;
  font-size: 1rem;
`;

export const OptionName = styled.p`
  font-size: 1rem;
`;

export const ToggleButton = styled.label`
  position: relative;
  width: 3rem;
  height: 1.4rem;
  margin-left: auto;

  .checkbox:checked + .slider:before {
    transform: translate(1.5rem);
  }

  .checkbox:checked + .slider {
    background-color: #4dc6ff;
  }
`;

export const Checkbox = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colorSwitch.bg};

  ::before {
    position: absolute;
    content: '';
    height: 1.2rem;
    width: 1.2rem;
    left: 3px;
    bottom: 2px;
    background-color: ${(props) => props.theme.colorSwitch.color};
    transition: transform 0.3s ease-in-out;
    border-radius: 1rem;
  }
`;
