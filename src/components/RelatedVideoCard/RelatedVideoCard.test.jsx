import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VideoCard from './RelatedVideoCard.component';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route>
          <VideoCard
            title="title test"
            description="Description test"
            thumbnails={{
              high: {
                url: 'url test',
              },
            }}
            channelTitle="Channel test"
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

describe('Related Video Card component', () => {
  it('should contain a title', () => {
    const titleElement = screen.queryByText(/title/i);

    expect(titleElement).toBeInTheDocument();
  });

  it('should contain a description', () => {
    const descriptionElement = screen.queryByText(/description/i);

    expect(descriptionElement).toBeInTheDocument();
  });

  it('should contain a channel', () => {
    const channelElement = screen.queryByText(/channel/i);

    expect(channelElement).toBeInTheDocument();
  });
});
