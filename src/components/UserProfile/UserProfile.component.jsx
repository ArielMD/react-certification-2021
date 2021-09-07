import React, { useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { GlobalContext } from '../../providers/Global';
import useTheme from '../../utils/hooks/useTheme';
import {
  ProfileContainer,
  UserInformation,
  UserPicture,
  Username,
  LineDivider,
  OptionContainer,
  OptionImage,
  OptionName,
  Logout,
  ToggleButton,
  Checkbox,
  Slider,
} from './UserProfile.styles';

const UserProfile = ({ isProfileVisible }) => {
  const profileRef = useRef(null);
  const { toggleTheme, isDarkMode } = useTheme();
  const { currentUser, logoutUser } = useContext(GlobalContext);
  const handleTheme = () => {
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
        {currentUser && (
          <>
            <UserInformation>
              <UserPicture src={currentUser.avatarUrl} alt="user" />
              <Username>{currentUser.name}</Username>
            </UserInformation>
            <LineDivider />
          </>
        )}
        <OptionContainer>
          <OptionImage className="far fa-moon" />
          <OptionName>Dark Mode</OptionName>
          <ToggleButton htmlFor="dark">
            <Checkbox
              type="checkbox"
              id="dark"
              className="checkbox"
              checked={isDarkMode}
              onChange={handleTheme}
            />
            <Slider className="slider" />
          </ToggleButton>
        </OptionContainer>
        {currentUser && (
          <>
            <LineDivider />
            <Logout onClick={logoutUser}>
              <OptionImage className="fas fa-sign-out-alt" />
              <OptionName>Log out</OptionName>
            </Logout>
          </>
        )}
      </ProfileContainer>
    </CSSTransition>
  );
};

export default UserProfile;
