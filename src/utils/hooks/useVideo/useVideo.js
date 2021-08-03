/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import videoService from '../../../services/videos.services';

const useVideo = (query) => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  const search = async () => {
    try {
      const response = await videoService().search(query);
      setVideos(response);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    query && search();
  });

  return { videos, error };
};

export default useVideo;
