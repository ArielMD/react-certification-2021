import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

import Explore from './Explore.component';

describe('Explore component', () => {
  it('should render child components', () => {
    const { container } = render(
      <BrowserRouter>
        <Switch>
          <Route>
            <Explore />
          </Route>
        </Switch>
      </BrowserRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
