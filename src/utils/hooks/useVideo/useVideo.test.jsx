import React from 'react';
import { render, screen } from '@testing-library/react';
import useVideo from './useVideo';

const ComponentTest = () => {
  const { videos, error } = useVideo('wizeline');
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

describe('custom hook useVideo', () => {
  it('Component test should not render a error', () => {
    render(<ComponentTest />);

    const errorElement = screen.queryByText(/error/i);
    expect(errorElement).not.toBeInTheDocument();
  });

  it('Component test should get videos and render them', async () => {
    render(<ComponentTest />);

    const titleVideoElement = await screen.findByText(
      /Founder & CEO Bismarck Lepe on growth opportunities at Wizeline and his career-path experience as an early Google employee. Join our team!/i
    );

    expect(titleVideoElement).toBeInTheDocument();
  });
});
