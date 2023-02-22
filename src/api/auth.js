import axios from "../libs/axios.js";

//login
export const loginRequest = async (credentials) => {
  return await axios.post(`/login`, credentials);
};
