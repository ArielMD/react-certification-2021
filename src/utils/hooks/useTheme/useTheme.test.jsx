import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useTheme from './useTheme';
import HOCThemeProvider from '../../../providers/Theme/Theme.provider';

const Component = () => {
  const { isDarkMode, toggleTheme, search, setSearch } = useTheme();
  return (
    <div>
      {isDarkMode ? <span>dark mode</span> : <span>light mode</span>}
      <button type="button" onClick={toggleTheme}>
        change theme
      </button>

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
    <HOCThemeProvider>
      <Component />
    </HOCThemeProvider>
  );
};
describe('custom hook useTheme', () => {
  beforeEach(() => {
    render(<ComponentTest />);
  });

  it('Component test should render dark mode by default', async () => {
    const darkmodeText = await screen.findByText(/dark mode/i);
    expect(darkmodeText).toBeInTheDocument();
  });

  it('Component test should render light mode when you run toggleTheme function', async () => {
    const buttonElement = screen.getByRole('button', { name: /change theme/i });

    fireEvent.click(buttonElement);

    const lightmodeText = await screen.findByText(/light mode/i);
    expect(lightmodeText).toBeInTheDocument();
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
