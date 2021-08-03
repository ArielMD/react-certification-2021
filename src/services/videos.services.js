import axios from 'axios';
import { YOUTUBE_KEY, BASE_URL } from '../utils/constants';

const videoService = () => {
  const search = async (query) => {
    const response = await axios({
      baseURL: BASE_URL,
      method: 'GET',
      url: `search?q=${query}&key=${YOUTUBE_KEY}&part=id,snippet&maxResults=20&order=relevance`,
    });

    return response.data;
  };

  const getById = async (id) => {
    const response = await axios({
      baseURL: BASE_URL,
      method: 'GET',
      url: `videos?id=${id}&key=${YOUTUBE_KEY}&part=snippet,contentDetails,statistics,status&maxResults=20`,
    });

    return response.data;
  };

  const getRelatedVideosById = async (id) => {
    const response = await axios({
      baseURL: BASE_URL,
      method: 'GET',
      url: `search?part=snippet&relatedToVideoId=${id}&type=video&key=${YOUTUBE_KEY}`,
    });

    return response.data;
  };

  return {
    search,
    getById,
    getRelatedVideosById,
  };
};

export default videoService;
