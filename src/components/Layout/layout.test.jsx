import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Layout from './Layout.component';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route>
          <Layout>
            <div>child</div>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

describe('Layout component', () => {
  it('should render child components', () => {
    const textElement = screen.queryByText(/child/i);

    expect(textElement).toBeInTheDocument();
  });
});
