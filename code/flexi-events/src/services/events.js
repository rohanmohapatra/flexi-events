import axios from "axios";
import { backendApi } from "./constants";

export const createEvent = async (event) => {
  const uri = `${backendApi}/events/createEvent`;
  const payload = event;
  const response = await axios.post(uri, payload);

  if (response.status === 201) {
    return response.data.eventId;
  }
};

export const getEvent = async (eventId) => {
  const uri = `${backendApi}/events/${eventId}`;
  const response = await axios.get(uri);

  if (response.status === 200) {
    return response.data;
  }
};
