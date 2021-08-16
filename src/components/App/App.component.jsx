import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HOCThemeProvider from '../../providers/Theme/Theme.provider';
import HomePage from '../../pages/Home';
import SearchPage from '../../pages/Search';
import VideoDetails from '../../pages/VideoDetails';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <HOCThemeProvider>
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
      </HOCThemeProvider>
    </BrowserRouter>
  );
}

export default App;
