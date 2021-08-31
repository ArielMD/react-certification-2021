import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Sidebar from './Sidebar.component';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route>
          <div id="main-container">
            <Sidebar hiddeSidebar />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

describe('Sidebar component', () => {
  it('should contains home', () => {
    const homeElement = screen.queryByText(/Home/i);

    expect(homeElement).toBeInTheDocument();
  });
  it('should contains playlist', () => {
    const playlistElement = screen.queryByText(/Favorites/i);

    expect(playlistElement).toBeInTheDocument();
  });
  it('should contains history', () => {
    const historyElement = screen.queryByText(/History/i);

    expect(historyElement).toBeInTheDocument();
  });
});
