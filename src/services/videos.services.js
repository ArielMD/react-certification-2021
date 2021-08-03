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

  return {
    search,
  };
};

export default videoService;
