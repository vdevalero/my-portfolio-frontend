import axios from "../libs/axios.js";

export function useDelete({ id, adminUrl }) {
  const deleteElement = async () => {
    await axios.delete(`${adminUrl}/${id}`);
  };

  return { deleteElement };
}
