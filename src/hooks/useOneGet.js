import { useState, useEffect } from "react";
import axios from "../libs/axios.js";

export const useOneGet = ({ url, id }) => {
  const [responseOne, setResponse] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/${id}`);
        setResponse(data);
      } catch (err) {
        console.log("ERR useOneGet => ", err);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, url]);

  return { responseOne };
};
