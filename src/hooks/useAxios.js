import { useCallback, useState } from "react";
import axios from "axios";
import books from "./api.response.mock";

function useAxios() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const request = useCallback(async ({ url, method = "GET" }, loadData) => {
    setError();
    setIsLoading(true);
    try {
      const { data } = await axios({ url, method });
      loadData(data);
    } catch (error) {
      console.log(`useAxios.request ${error}`);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    request,
  };
}

export default useAxios;
