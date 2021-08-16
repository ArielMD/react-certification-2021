/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import videoService from '../../../services/videos.services';

const useVideoDetails = (id) => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true;

    const findById = async () => {
      try {
        const response = await videoService().getById(id);
        if (isSubscribed) setVideo(response.items[0]);
      } catch (err) {
        setError(err);
      }
    };

    id && findById();
    return () => {
      isSubscribed = false;
    };
  }, [id]);

  return { video, error };
};

export default useVideoDetails;
