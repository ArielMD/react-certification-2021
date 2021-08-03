import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
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
  const [search, setSearch] = useState('');
  const history = useHistory();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`search?search_query=${search}`);
  };

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    <>
      <Navbar>
        <Content>
          <MenuButton onClick={toggleSidebar}>
            <MenuIcon className="fas fa-bars" size="43" />
          </MenuButton>
          <Link to="/">
            <Image src="logo.svg" alt="" size="50" />
          </Link>
          <Name>Wizeline Videos </Name>
        </Content>

        <SearchForm
          onSubmit={handleSubmit}
          isVisible={isSearchVisible}
          ref={searchFormRef}
        >
          <SearchInput
            type="text"
            placeholder="Search"
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchButton type="submit">
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
