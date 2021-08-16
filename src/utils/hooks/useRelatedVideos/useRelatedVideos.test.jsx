import React from 'react';
import { render, screen } from '@testing-library/react';
import useRelatedVideos from './useRelatedVideos';

const ComponentTest = () => {
  const { videos, error } = useRelatedVideos(1);
  return (
    <div>
      {error && <div>error</div>}
      {videos?.items.map((item) => (
        <div key={item.id.videoId || item.id.channelId}>
          <span>{item.snippet.title}</span>
          <span>{item.snippet.description}</span>
          <span>{item.snippet.channelTitle}</span>
        </div>
      ))}
    </div>
  );
};

describe('custom hook useRelatedVideos', () => {
  it('Component test should not render a error', () => {
    render(<ComponentTest />);

    const errorElement = screen.queryByText(/error/i);
    expect(errorElement).not.toBeInTheDocument();
  });

  it('Component test should get videos and render them', async () => {
    render(<ComponentTest />);

    const videoTitleElement = await screen.findByText(
      /Wizeline Guadalajara | Bringing Silicon Valley to Mexico/i
    );

    expect(videoTitleElement).toBeInTheDocument();
  });
});
