import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useSearch from './useSearch';
import GlobalProvider from '../../../providers/Global';

const Component = () => {
  const { search, setSearch } = useSearch();
  return (
    <div>
      <span>{search}</span>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
      />
      <button type="button">Search</button>
    </div>
  );
};

const ComponentTest = () => {
  return (
    <GlobalProvider>
      <Component />
    </GlobalProvider>
  );
};

describe('custom hook useSearch', () => {
  beforeEach(() => {
    render(<ComponentTest />);
  });

  it('Component test should render input search with a blank value', () => {
    const inputElement = screen.getByPlaceholderText(/search/i);

    expect(inputElement.innerHTML).toBe('');
  });

  it('Input should change value when you type inside', () => {
    const inputElement = screen.getByPlaceholderText(/search/i);

    fireEvent.change(inputElement, { target: { value: 'react' } });
    expect(inputElement.value).toBe('react');
  });

  it('Component test should change the search state when you type inside the input', async () => {
    const inputElement = screen.getByPlaceholderText(/search/i);

    fireEvent.change(inputElement, { target: { value: 'react' } });

    const spanElement = await screen.findByText(/react/i);

    expect(spanElement.innerHTML).toBe('react');
  });
});
