import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(url);

      try {
        const data = await response.json();
        setIsLoading(false);
        setData(data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setData([]);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, setData };
};
