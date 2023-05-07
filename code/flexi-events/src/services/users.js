import axios from "axios";
import { backendApi } from "./constants";

export const getMe = async (token) => {
  const uri = `${backendApi}/users/me`;
  const response = await axios.get(uri, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 200) {
    return response.data;
  }
};