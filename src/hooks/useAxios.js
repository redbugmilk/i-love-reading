import { useState } from "react";
import axios from "axios";
import books from "./api.response.mock";

function useAxios() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const request = async ({ url, method = "GET" }) => {
    setError();
    setIsLoading(true);
    try {
      //const { data } = await axios({ url, method });
      const data = books;
      setData(data);
    } catch (error) {
      console.log(`useAxios.request ${error}`);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    request,
  };
}

export default useAxios;
