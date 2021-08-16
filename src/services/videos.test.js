import videoServices from './videos.services';

describe('videos services', () => {
  it('search service should return code status 200 and resposonse should be defined', async () => {
    const response = await videoServices().search('wizeline');
    expect(response).toBeDefined();
    expect(response.items.length).toBeGreaterThan(0);
  });

  it('getById service should return code status 200 and resposonse should be defined', async () => {
    const response = await videoServices().getById(0);
    expect(response).toBeDefined();
    expect(response.items.length).toBeGreaterThan(0);
  });
});
