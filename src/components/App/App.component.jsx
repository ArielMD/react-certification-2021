import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import SearchPage from '../../pages/Search';
import VideoDetails from '../../pages/VideoDetails';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';

import { dark } from '../../utils/themes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={dark}>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/search">
                <SearchPage />
              </Route>
              <Route exact path="/video">
                <VideoDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
