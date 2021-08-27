import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useTheme from './useTheme';
import HOCThemeProvider from '../../../providers/Theme/Theme.provider';

const Component = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      {isDarkMode ? <span>dark mode</span> : <span>light mode</span>}
      <button type="button" onClick={toggleTheme}>
        change theme
      </button>
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
});
