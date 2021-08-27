import { useState, useEffect } from 'react';
import videoService from '../../../services/videos.services';

const useRelatedVideos = (id) => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true;

    const findById = async () => {
      try {
        const response = await videoService().getRelatedVideosById(id);
        if (isSubscribed) setVideos(response);
      } catch (err) {
        setError(err);
      }
    };

    if (id) findById();

    return () => {
      isSubscribed = false;
    };
  }, [id]);

  return { videos, error };
};

export default useRelatedVideos;
