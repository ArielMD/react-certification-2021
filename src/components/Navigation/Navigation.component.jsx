import React, { useState, useRef } from 'react';
import useClickOutside from '../../utils/hooks/useClickOutside';
import useOutside from '../../utils/hooks/useOutside';
import UserProfile from '../UserProfile';
import Sidebar from '../Sidebar';
import {
  Navbar,
  Icon,
  MenuIcon,
  Image,
  Name,
  Content,
  LoginButton,
  UserPicture,
  UserIcon,
  SearchForm,
  SearchInput,
  SearchButton,
  ShowSearchButton,
} from './Navigation.styles';

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [hiddeSidebar, setHiddeSidebar] = useState(true);

  const searchRef = useRef(null);
  const showSearchRed = useRef(null);
  useOutside(searchRef, showSearchRed, () => setShowSearch(true));

  const profileRef = useRef(null);
  useClickOutside(profileRef, () => setShowProfile(false));

  const toggleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleSHowProfileUser = () => {
    setShowProfile(!showProfile);
  };

  return (
    <>
      <Navbar>
        <Content>
          {hiddeSidebar ? (
            <MenuIcon
              className="fas fa-bars"
              size="43"
              onClick={() => setHiddeSidebar(false)}
            />
          ) : (
            <MenuIcon
              className="fas fa-bars"
              size="43"
              onClick={() => setHiddeSidebar(true)}
            />
          )}
          <Image src="logo.svg" alt="" size="50" />
          <Name>Wizeline Videos </Name>
        </Content>

        <SearchForm hidden={showSearch} ref={searchRef}>
          <SearchInput type="text" placeholder="Search" />
          <SearchButton>
            <Icon className="fas fa-search" size="25" />
          </SearchButton>
        </SearchForm>

        <Content>
          <ShowSearchButton onClick={() => toggleShowSearch()} ref={showSearchRed}>
            <Icon className="fas fa-search" size="25" />
          </ShowSearchButton>
          <LoginButton>Log in</LoginButton>
          <UserPicture onClick={() => toggleSHowProfileUser()} ref={profileRef}>
            <UserIcon className="fas fa-user" size="40" />
            <UserProfile showProfile={showProfile} />
          </UserPicture>
        </Content>
      </Navbar>
      <Sidebar hiddeSidebar={hiddeSidebar} setHiddeSidebar={setHiddeSidebar} />
    </>
  );
};

export default Navigation;
