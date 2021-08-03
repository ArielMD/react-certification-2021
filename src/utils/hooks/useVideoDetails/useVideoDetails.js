/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import videoService from '../../../services/videos.services';

const useVideoDetails = (id) => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  const findById = async () => {
    try {
      const response = await videoService().getById(id);
      setVideo(response.items[0]);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    id && findById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { video, error };
};

export default useVideoDetails;
