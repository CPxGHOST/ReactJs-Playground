import { useState, useEffect } from "react";
const useApi = (requestConfig, takeData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        body: JSON.stringify(requestConfig.body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      takeData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const networkCall = async () => {
      await sendRequest();
    };
    networkCall();
  }, []);
  return [isLoading, error];
};
export default useApi;
