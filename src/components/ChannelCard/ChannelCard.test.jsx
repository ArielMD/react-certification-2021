import React from 'react';
import { render, screen } from '@testing-library/react';

import ChannelCard from './ChannelCard.component';

const mock = {
  snippet: {
    description: 'Description test',
    thumbnails: {
      high: {
        url: 'url test',
      },
    },
    channelTitle: 'Channel test',
  },
};

beforeEach(() => {
  render(<ChannelCard video={mock} />);
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

  it('should contains a image', () => {
    const imageElement = screen.queryByAltText(/channel/i);
    expect(imageElement).toBeInTheDocument();
  });
});
