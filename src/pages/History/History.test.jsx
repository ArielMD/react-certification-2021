import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import History from './History.component';
import GlobalProvider from '../../providers/Global';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route>
            <History />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('history page', () => {
  it('should contain a title', () => {
    const titleElement = screen.queryByText(/History videos/i);

    expect(titleElement).toBeInTheDocument();
  });
});
