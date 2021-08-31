import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HOCThemeProvider from '../../providers/Theme/Theme.provider';
import HomePage from '../../pages/Home';
import SearchPage from '../../pages/Search';
import VideoDetails from '../../pages/VideoDetails';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import GlobalProvider from '../../providers/Global';
import Favorites from '../../pages/Favorites';
import History from '../../pages/History';
import PrivateRoute from '../PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <HOCThemeProvider>
        <GlobalProvider>
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
              <PrivateRoute exact path="/favorites" component={Favorites} />
              <Route exact path="/history">
                <History />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </GlobalProvider>
      </HOCThemeProvider>
    </BrowserRouter>
  );
}

export default App;
