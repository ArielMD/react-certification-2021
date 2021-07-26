import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 4px #00000050;
  position: fixed;
  z-index: 10;
`;

export const Icon = styled.i`
  font-size: ${(props) => (props.size ? `${props.size}px` : '4rem')};
  color: #4dc6ff;
`;

export const MenuIcon = styled(Icon)`
  margin-right: 1.3rem;
  cursor: pointer;
`;

export const UserIcon = styled(Icon)`
  color: #fff;
`;

export const Image = styled.img`
  width: ${(props) => (props.size ? `${props.size}px` : '4rem')};
  cursor: pointer;
`;

export const Name = styled.span`
  display: none;
  font-size: 24px;
  margin-left: 1rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem;
`;

export const LoginButton = styled.button`
  width: 6.5rem;
  height: 2.2rem;
  color: #4a4a4a;
  background-color: #e5e5e5;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #4dc6ff;
    color: #ffffff;
  }
`;

export const UserPicture = styled.div`
  background-color: #4dc6ff;
  width: 50px;
  height: 50px;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.3rem;
  cursor: pointer;
`;

export const SearchForm = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  width: 100%;

  @media (min-width: 992px) {
    flex: 1;
    display: flex;
    position: static;
    width: auto;
  }
`;

export const SearchInput = styled.input`
  width: 40%;
  height: 2rem;
  border-radius: 0.3rem 0 0 0.3rem;
  background-color: #e5e5e5;
  font-size: 0.9rem;
  outline: none;
  border: none;
  &:focus {
    border: 3px solid #4dc6ff;
  }

  @media (min-width: 992px) {
    width: 100%;
    max-width: 18rem;
  }
`;

export const SearchButton = styled.button`
  background-color: #e5e5e5;
  height: 2rem;
  border: none;
  outline: none;
  border-radius: 0 0.3rem 0.3rem 0;
  cursor: pointer;
`;

export const ShowSearchButton = styled(SearchButton)`
  border-radius: 0.3rem;
  margin-right: 1rem;
  @media (min-width: 992px) {
    display: none;
  }
`;
