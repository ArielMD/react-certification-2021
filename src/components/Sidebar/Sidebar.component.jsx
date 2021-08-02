import React, { useRef } from 'react';
import useClickOutside from '../../utils/hooks/useClickOutside';

import { SidebarWrapper, ItemContainer, ItemIcon, ItemName } from './sidebar.styles';

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  const sidebarRef = useRef(null);

  useClickOutside(sidebarRef, () => setIsSidebarVisible(false));
  return (
    <SidebarWrapper ref={sidebarRef} className={isSidebarVisible ? '' : 'hidden'}>
      <ItemContainer to="/">
        <ItemIcon className="fas fa-home" />
        <ItemName>Home</ItemName>
      </ItemContainer>
      <ItemContainer to="/">
        <ItemIcon className="fas fa-stream" />
        <ItemName>Playlist</ItemName>
      </ItemContainer>
      <ItemContainer to="/">
        <ItemIcon className="fas fa-history" />
        <ItemName>History</ItemName>
      </ItemContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
