import { useState, useEffect, useCallback } from "react";
import axios from "../libs/axios.js";

export function useGet({ url }) {
  const [response, setResponse] = useState([]);

  const get = async () => {
    try {
      const { data } = await axios.get(url);
      setResponse(data);
    } catch (err) {
      console.log("ERR useGet() ===>", err);
    }
  };

  useEffect(() => {
    get(url);
  }, [url]);

  return { response };
}
