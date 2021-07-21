import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
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
} from './UserProfile.styles';

const UserProfile = ({ showProfile }) => {
  const profileRef = useRef(null);

  return (
    <CSSTransition
      in={showProfile}
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
          <ToggleButton />
        </OptionContainer>
        <OptionContainer>
          <OptionImage className="fas fa-globe-americas" />
          <OptionName>Language</OptionName>
          <ToggleButton />
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
