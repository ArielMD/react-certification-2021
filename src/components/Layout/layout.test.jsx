import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Layout from './Layout.component';
import HOCTheme from '../../providers/Theme';

beforeEach(() => {
  render(
    <HOCTheme>
      <BrowserRouter>
        <Switch>
          <Route>
            <Layout>
              <div>child</div>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </HOCTheme>
  );
});

describe('Layout component', () => {
  it('should render child components', () => {
    const textElement = screen.queryByText(/child/i);

    expect(textElement).toBeInTheDocument();
  });
});
