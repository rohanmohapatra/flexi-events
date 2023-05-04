import axios from "axios";
import { backendApi } from "./constants";

export const login = async (payload) => {
  const uri = `${backendApi}/auth/login`;
  const response = await axios.post(uri, payload);

  if (response.status === 201) {
    return response.data.accessToken;
  } else {
    return undefined;
  }
};
