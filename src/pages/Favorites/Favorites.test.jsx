import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorites from './Favorites.component';
import GlobalProvider from '../../providers/Global';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route>
            <Favorites />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('favorite page', () => {
  it('should contain a title', () => {
    const titleElement = screen.queryByText(/Favorites videos/i);

    expect(titleElement).toBeInTheDocument();
  });
});
