import axios from "../libs/axios.js";
export function useUpdate({ adminUrl, id, data }) {
  const update = async () => {
    try {
      await axios.patch(`${adminUrl}/${id}`, data);
    } catch (err) {
      console.log("useUpdate ==>", err);
    }
  };
  return {
    update,
  };
}
