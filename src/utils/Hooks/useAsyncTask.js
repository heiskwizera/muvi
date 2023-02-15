import { useState, useEffect } from 'react';

const useAsyncTask = (startAsync, onFinish) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAsyncTask = async () => {
      try {
        await startAsync();
        setIsLoading(false);
        onFinish && onFinish();
      } catch (error) {
        console.warn(error);
      }
    };

    loadAsyncTask();
  }, []);

  return isLoading;
};

export default useAsyncTask;
