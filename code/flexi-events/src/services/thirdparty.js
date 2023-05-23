import axios from "axios";
import { backendApi } from "./constants";

export const zoomSignIn = async (token) => {
  const uri = `${backendApi}/zoom/signIn`;
  const response = await axios.get(uri, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 200) {
    window.open(response.data.redirectUri);
  }
};
