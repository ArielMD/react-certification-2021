import React from 'react';
import { render, screen } from '@testing-library/react';

import UserProfile from './UserProfile.component';
import HOCTheme from '../../providers/Theme';

beforeEach(() => {
  render(
    <HOCTheme>
      <UserProfile isProfileVisible />
    </HOCTheme>
  );
});

describe('UserProfile component', () => {
  it('should contains a dark mode', () => {
    const darkmodeElement = screen.getByText(/Dark Mode/i);

    expect(darkmodeElement).toBeInTheDocument();
  });

  it('should contains a language', () => {
    const darkmodeElement = screen.getByText(/Language/i);

    expect(darkmodeElement).toBeInTheDocument();
  });

  it('should contains a logout', () => {
    const logoutElement = screen.getByText(/Log out/i);

    expect(logoutElement).toBeInTheDocument();
  });

  it('should render UserProdfile when showProfile prop is true', () => {
    const { container } = render(
      <HOCTheme>
        <UserProfile isProfileVisible />
      </HOCTheme>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should not render UserProfile when showProfile prop is false', () => {
    const { container } = render(
      <HOCTheme>
        <UserProfile isProfileVisible={false} />
      </HOCTheme>
    );
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
