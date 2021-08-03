import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Search from './Search.component';

beforeEach(() => {
  render(
    <MemoryRouter initialEntries={['/search?search_query=react']}>
      <Search />
    </MemoryRouter>
  );
});

describe('Video Card component', () => {
  it('should contains a result', () => {
    const resultElement = screen.queryByText(/Search result/i);

    expect(resultElement).toBeInTheDocument();
  });

  it('Error message should not render in the document', () => {
    const resultElement = screen.queryByText(/Error loading the videos/i);

    expect(resultElement).not.toBeInTheDocument();
  });
});
