import React, { useState, useRef, useEffect } from 'react';
import useClickOutside from '../../utils/hooks/useClickOutside';
import useOutside from '../../utils/hooks/useOutside';
import UserProfile from '../UserProfile';
import Sidebar from '../Sidebar';
import {
  Navbar,
  MenuButton,
  UserButton,
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
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const inputRef = useRef(null);
  const searchFormRef = useRef(null);
  const SearchButtonRef = useRef(null);
  useOutside(searchFormRef, SearchButtonRef, () => setIsSearchVisible(false));

  const profileRef = useRef(null);
  useClickOutside(profileRef, () => setIsProfileVisible(false));

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleProfileUser = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current.focus();
      console.log(inputRef.current);
    }
  }, [isSearchVisible]);

  return (
    <>
      <Navbar>
        <Content>
          <MenuButton onClick={toggleSidebar}>
            <MenuIcon className="fas fa-bars" size="43" />
          </MenuButton>

          <Image src="logo.svg" alt="" size="50" />
          <Name>Wizeline Videos </Name>
        </Content>

        <SearchForm isVisible={isSearchVisible} ref={searchFormRef}>
          <SearchInput type="text" placeholder="Search" ref={inputRef} />
          <SearchButton>
            <Icon className="fas fa-search" size="25" />
          </SearchButton>
        </SearchForm>

        <Content>
          <ShowSearchButton onClick={toggleSearch} ref={SearchButtonRef}>
            <Icon className="fas fa-search" size="25" />
          </ShowSearchButton>
          <LoginButton>Log in</LoginButton>
          <UserPicture ref={profileRef}>
            <UserButton onClick={toggleProfileUser}>
              <UserIcon className="fas fa-user" size="40" />
            </UserButton>
            <UserProfile isProfileVisible={isProfileVisible} />
          </UserPicture>
        </Content>
      </Navbar>
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </>
  );
};

export default Navigation;
