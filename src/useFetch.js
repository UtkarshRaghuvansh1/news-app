import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          if (response.status === 404) {
            setData({ notFound: true });
          } else {
            throw new Error(`HTTP Error: ${response.status}`);
          }
        } else {
          const resData = await response.json();
          setData(resData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
