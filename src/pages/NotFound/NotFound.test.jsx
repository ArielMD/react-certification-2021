import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound.page';
import GlobalProvider from '../../providers/Global';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('NotFound page', () => {
  it('should contain a link', () => {
    const linkElement = screen.queryByText(/Go to Home/i);

    expect(linkElement).toBeInTheDocument();
  });

  it('should contain a page not fount text', () => {
    const linkElement = screen.queryByText(/Page not found 404/i);

    expect(linkElement).toBeInTheDocument();
  });
});
