import { useState, useEffect } from 'react';
import videoService from '../../../services/videos.services';

const useRelatedVideos = (id) => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const findById = async () => {
      try {
        const response = await videoService().getRelatedVideosById(id);
        console.log(response);
        setVideos(response);
      } catch (err) {
        setError(err);
      }
    };

    if (id) findById();
  }, [id]);

  return { videos, error };
};

export default useRelatedVideos;
