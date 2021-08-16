import React from 'react';
import { render, screen } from '@testing-library/react';
import useVideosDetails from './useVideoDetails';

const ComponentTest = () => {
  const { video, error } = useVideosDetails('wizeline');
  return (
    <div>
      {error && <div>error</div>}
      {video && (
        <div>
          <span>{video.snippet.title}</span>
          <span>{video.snippet.channelTitle}</span>
          <span>{video.snippet.description}</span>
          <span>{video.statistics.viewCount}</span>
          <span>{video.statistics.likeCount}</span>
          <span>{video.statistics.dislikeCount}</span>
        </div>
      )}
    </div>
  );
};

describe('Custom hook useVideoDetails', () => {
  beforeEach(() => {
    render(<ComponentTest />);
  });

  it('should contain a title', async () => {
    const titleElement = await screen.findByText(
      /Video Tour | Welcome to Wizeline Guadalajara/i
    );
    expect(titleElement).toBeInTheDocument();
  });

  it('should contain a channel title', async () => {
    const channelTitleElement = await screen.findByText(/^Wizeline$/i);
    expect(channelTitleElement).toBeInTheDocument();
  });

  it('should contain a description', async () => {
    const DescriptionElement = await screen.findByText(
      /Follow Hector Padilla, Wizeline Director of Engineering/i
    );
    expect(DescriptionElement).toBeInTheDocument();
  });

  it('should contain a view count', async () => {
    const viewCountElement = await screen.findByText(/^15372$/i);
    expect(viewCountElement).toBeInTheDocument();
  });

  it('should contain a like count', async () => {
    const likeCountElement = await screen.findByText(/^287$/i);
    expect(likeCountElement).toBeInTheDocument();
  });

  it('should contain a dislike count', async () => {
    const dislikeElement = await screen.findByText(/^5$/i);
    expect(dislikeElement).toBeInTheDocument();
  });
});
