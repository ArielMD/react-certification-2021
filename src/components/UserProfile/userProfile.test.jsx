import React from 'react';
import { render, screen } from '@testing-library/react';

import UserProfile from './UserProfile.component';

beforeEach(() => {
  render(<UserProfile showProfile />);
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
    const { container } = render(<UserProfile showProfile />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should not render UserProdfile when showProfile prop is false', () => {
    const { container } = render(<UserProfile showProfile={false} />);
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
