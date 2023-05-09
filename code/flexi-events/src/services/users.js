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

export const createProfile = async (token, payload, email) => {
  const uri = `${backendApi}/users/createProfile`;
  const response = await axios.post(uri, { ...payload, email });

  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
};
