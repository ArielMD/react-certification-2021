import React from 'react';
import { render, screen } from '@testing-library/react';
import useVideo from './useVideo';

const ComponentTest = () => {
  const { videos, error } = useVideo('wizeline');
  return (
    <div>
      {error && <div>error</div>}
      <h1>{videos?.items.count}</h1>
    </div>
  );
};

describe('Video Card component', () => {
  it('should contains a result', async () => {
    render(<ComponentTest />);

    const errorElement = screen.queryByText(/error/i);
    // const videosCount = await screen.findByRole(/count/i);
    expect(errorElement).not.toBeInTheDocument();
  });
});
