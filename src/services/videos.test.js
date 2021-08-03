import videoServices from './videos.services';

describe('videos services', () => {
  it('should return code status 200', async () => {
    const response = await videoServices().search('wizeline');
    expect(response.items.length).toBe(20);
  });
});
