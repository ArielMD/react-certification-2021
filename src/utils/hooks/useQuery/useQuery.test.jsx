import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Video Card component', () => {
  it('should contains a result', () => {
    let testLocation;
    render(
      <MemoryRouter initialEntries={['/search?search_query=react']}>
        <Route
          path="*"
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/search');
    const searchParams = new URLSearchParams(testLocation.search);
    expect(searchParams.has('search_query')).toBe(true);
    expect(searchParams.get('search_query')).toBe('react');
  });
});
