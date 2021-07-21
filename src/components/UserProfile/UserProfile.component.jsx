import React from 'react';
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

const UserProfile = () => {
  return (
    <ProfileContainer>
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
  );
};

export default UserProfile;
