import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';

beforeEach(() => {
  render(
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
  );
});

describe('Video Card component', () => {
  it('should contains a title', () => {
    const titleElement = screen.queryByText(/title/i);

    expect(titleElement).toBeInTheDocument();
  });

  it('should contains a description', () => {
    const descriptionElement = screen.queryByText(/description/i);

    expect(descriptionElement).toBeInTheDocument();
  });

  it('should contains a channel', () => {
    const channelElement = screen.queryByText(/channel/i);

    expect(channelElement).toBeInTheDocument();
  });
});
