import axios from 'axios';
import { YOUTUBE_KEY, BASE_URL, BASE_URL_TEST } from '../utils/constants';

const baseUrl = process.env.NODE_ENV === 'test' ? BASE_URL_TEST : BASE_URL;

const videoService = () => {
  const search = async (query) => {
    const response = await axios({
      baseURL: baseUrl,
      method: 'GET',
      url: `search?q=${query}&key=${YOUTUBE_KEY}&part=id,snippet&maxResults=20&order=relevance`,
    });

    return response.data;
  };

  const getById = async (id) => {
    const response = await axios({
      baseURL: baseUrl,
      method: 'GET',
      url: `videos?id=${id}&key=${YOUTUBE_KEY}&part=snippet,contentDetails,statistics,status`,
    });

    return response.data;
  };

  const getRelatedVideosById = async (id) => {
    const response = await axios({
      baseURL: baseUrl,
      method: 'GET',
      url: `search?part=snippet&relatedToVideoId=${id}&type=video&key=${YOUTUBE_KEY}&maxResults=10`,
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
