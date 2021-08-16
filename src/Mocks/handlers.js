import { rest } from 'msw';
import youtubeVideosMocks from './youtube-videos-mock.json';
import youtubeVideoDetails from './youtube-video-details.json';

export const handlers = [
  rest.get('https://api.backend.dev/youtube/v3/search', (req, res, ctx) => {
    return res(ctx.json(youtubeVideosMocks));
  }),

  rest.get('https://api.backend.dev/youtube/v3/videos', (req, res, ctx) => {
    return res(ctx.json(youtubeVideoDetails));
  }),
];
