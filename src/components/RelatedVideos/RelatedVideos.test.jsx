import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RelatedVideos from './RelatedVideos.component';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route>
          <RelatedVideos />
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

describe('RelatedVideos component', () => {
  it('should contain a title', () => {
    const titleElement = screen.queryByText(/Related videos/i);

    expect(titleElement).toBeInTheDocument();
  });
});
