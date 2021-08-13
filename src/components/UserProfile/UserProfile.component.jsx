import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTheme } from '../../providers/Theme/Theme.provider';
import {
  ProfileContainer,
  UserInformation,
  UserPicture,
  Username,
  LineDivider,
  OptionContainer,
  OptionImage,
  OptionName,
  ToggleButton,
  Checkbox,
  Slider,
} from './UserProfile.styles';

const UserProfile = ({ isProfileVisible }) => {
  const profileRef = useRef(null);
  const { toggleTheme, isDarkMode } = useTheme();

  const handleTheme = () => {
    console.log(isDarkMode);
    toggleTheme();
  };

  return (
    <CSSTransition
      in={isProfileVisible}
      timeout={200}
      classNames="profile-container"
      unmountOnExit
      nodeRef={profileRef}
    >
      <ProfileContainer ref={profileRef}>
        <UserInformation>
          <UserPicture className="fas fa-user" />
          <Username>Ariel May</Username>
        </UserInformation>
        <LineDivider />
        <OptionContainer>
          <OptionImage className="far fa-moon" />
          <OptionName>Dark Mode</OptionName>
          <ToggleButton htmlFor="dark">
            <Checkbox
              type="checkbox"
              id="dark"
              className="checkbox"
              value={isDarkMode}
              onChange={handleTheme}
            />
            <Slider className="slider" />
          </ToggleButton>
        </OptionContainer>
        <OptionContainer>
          <OptionImage className="fas fa-globe-americas" />
          <OptionName>Language</OptionName>
          <ToggleButton htmlFor="language">
            <Checkbox type="checkbox" id="language" className="checkbox" />
            <Slider className="slider" />
          </ToggleButton>
        </OptionContainer>
        <LineDivider />
        <OptionContainer>
          <OptionImage className="fas fa-sign-out-alt" />
          <OptionName>Log out</OptionName>
        </OptionContainer>
      </ProfileContainer>
    </CSSTransition>
  );
};

export default UserProfile;
