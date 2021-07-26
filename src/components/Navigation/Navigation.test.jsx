import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Navigation from './Navigation.component';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route>
          <div id="main-container">
            <Navigation />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

describe('Navigation component', () => {
  it('should contains wizeline text', () => {
    const textElement = screen.queryByText(/Wizeline/i);

    expect(textElement).toBeInTheDocument();
  });

  it('should contains input search', () => {
    const inputElement = screen.getByPlaceholderText(/search/i);

    expect(inputElement).toBeInTheDocument();
  });

  it('should contains a login button', () => {
    const loginElement = screen.queryByText(/Log in/i);
  });
});
