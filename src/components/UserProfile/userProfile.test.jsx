import React from 'react';
import { render, screen } from '@testing-library/react';

import UserProfile from './UserProfile.component';
import HOCTheme from '../../providers/Theme';
import GlobalProvider from '../../providers/Global';

beforeEach(() => {
  render(
    <HOCTheme>
      <GlobalProvider>
        <UserProfile isProfileVisible />
      </GlobalProvider>
    </HOCTheme>
  );
});

describe('UserProfile component', () => {
  it('should contains a dark mode', () => {
    const darkmodeElement = screen.getByText(/Dark Mode/i);

    expect(darkmodeElement).toBeInTheDocument();
  });

  it('should not contains a logout', () => {
    const logoutElement = screen.queryByDisplayValue(/Log out/i);

    expect(logoutElement).not.toBeInTheDocument();
  });

  it('should render UserProdfile when showProfile prop is true', () => {
    const { container } = render(
      <HOCTheme>
        <GlobalProvider>
          <UserProfile isProfileVisible />
        </GlobalProvider>
      </HOCTheme>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should not render UserProfile when showProfile prop is false', () => {
    const { container } = render(
      <HOCTheme>
        <GlobalProvider>
          <UserProfile isProfileVisible={false} />
        </GlobalProvider>
      </HOCTheme>
    );
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
