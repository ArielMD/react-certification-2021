import React from 'react';
import { render, screen } from '@testing-library/react';
import ChannelCard from './ChannelCard.component';

beforeEach(() => {
  render(
    <ChannelCard
      description="Description test"
      thumbnails={{
        high: {
          url: 'url test',
        },
      }}
      channelTitle="Channel test"
    />
  );
});

describe('Channel card component', () => {
  it('should contains a channel title', () => {
    const channelElement = screen.queryByText(/channel/i);

    expect(channelElement).toBeInTheDocument();
  });

  it('should contains a description', () => {
    const descriptionElement = screen.queryByText(/description/i);

    expect(descriptionElement).toBeInTheDocument();
  });
});
