import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home.page';
import GlobalProvider from '../../providers/Global';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('videoDetails page', () => {
  it('should contain a title', () => {
    const titleElement = screen.queryByText(/Explore new videos/i);

    expect(titleElement).toBeInTheDocument();
  });

  it('should contains a items to explore', () => {
    const reactElement = screen.queryByText(/React/i);
    const gamesElement = screen.queryByText(/Games/i);
    const technologyElement = screen.queryByText(/Technology/i);
    const learningElement = screen.queryByText(/Learning/i);

    expect(reactElement).toBeInTheDocument();
    expect(gamesElement).toBeInTheDocument();
    expect(technologyElement).toBeInTheDocument();
    expect(learningElement).toBeInTheDocument();
  });

  it('should render videos', async () => {
    const videoTitle = await screen.findByText(
      /^Video Tour | Welcome to Wizeline Guadalajara$/i
    );

    const videoDescription = await screen.findByText(
      /Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018/i
    );

    expect(videoTitle).toBeInTheDocument();
    expect(videoDescription).toBeInTheDocument();
  });
});
