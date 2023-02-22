import axios from "../libs/axios.js";
export function useCreate({ adminUrl, data }) {
  const create = async () => {
    try {
      await axios.post(adminUrl, data);
    } catch (e) {
      console.log("Error useCreate ==>", e);
    }
  };
  return {
    create,
  };
}
