import React, { useState, useRef } from 'react';
import useOutside from '../../utils/hooks/useOutside';
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

  const searchRef = useRef(null);
  const showSearchRed = useRef(null);
  useOutside(searchRef, showSearchRed, () => setShowSearch(true));

  const toggleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Navbar>
      <Content>
        <MenuIcon className="fas fa-bars" size="43" />
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
        <UserPicture>
          <UserIcon className="fas fa-user" size="40" />
        </UserPicture>
      </Content>
    </Navbar>
  );
};

export default Navigation;
