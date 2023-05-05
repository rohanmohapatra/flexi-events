import axios from "axios";
import { backendApi } from "./constants";

export const createEvent = async (event, token) => {
  const uri = `${backendApi}/events/createEvent`;
  const payload = event;
  const response = await axios.post(uri, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 201) {
    return { type: true, message: response.data.eventId };
  } else {
    return { type: false, message: "Could not create event" };
  }
};

export const getEvent = async (eventId, token) => {
  const uri = `${backendApi}/events/${eventId}`;
  const response = await axios.get(uri, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 200) {
    return response.data;
  }
};

export const getEvents = async (token) => {
  const uri = `${backendApi}/events`;
  const response = await axios.get(uri, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 200) {
    return response.data;
  }
};
