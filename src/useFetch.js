import { useState, useEffect } from "react";

const apiCache = {};
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    // Use Cache
    if (apiCache[url]) {
      console.log("⚡ Using cached data for:", url);
      console.log("⚡ Using cached data :", apiCache);
      setData(apiCache[url]);
      setLoading(false);
      return;
    }

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
          apiCache[url] = resData;
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
