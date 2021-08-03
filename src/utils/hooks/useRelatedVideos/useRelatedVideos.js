/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';
import videoService from '../../../services/videos.services';

const useRelatedVideos = (id) => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  const findById = async () => {
    try {
      const response = await videoService().getRelatedVideosById(id);
      console.log(response);
      setVideos(response);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    id && findById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { videos, error };
};

export default useRelatedVideos;
