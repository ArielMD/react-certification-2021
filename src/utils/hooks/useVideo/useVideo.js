import { useEffect, useState } from 'react';
import videoService from '../../../services/videos.services';

const useVideo = (query) => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true;

    const search = async () => {
      try {
        const response = await videoService().search(query);
        if (isSubscribed) setVideos(response);
      } catch (err) {
        setError(err);
      }
    };

    if (query) search();

    return () => {
      isSubscribed = false;
    };
  }, [query]);

  return { videos, error };
};

export default useVideo;
