import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import ExploreItem from './ExploreItem.component';

const mock = {
  url: '/react',
  image: 'react.png',
  name: 'React',
};

beforeEach(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route>
          <ExploreItem item={mock} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

describe('ExploreItem component', () => {
  it('should contains a React title', () => {
    const titleElement = screen.queryByText(/react/i);

    expect(titleElement).toBeInTheDocument();
  });

  it('should contains a react image', () => {
    const imageElement = screen.queryByAltText(/react/i);

    expect(imageElement).toBeInTheDocument();
  });
});
