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

export const getEventsPublic = async () => {
  const uri = `${backendApi}/events/public`;
  const response = await axios.get(uri);

  if (response.status === 200) {
    return response.data;
  }
};

export const registerParticipant = async (eventId, payload) => {
  const uri = `${backendApi}/events/${eventId}/participants/register`;
  const response = await axios.post(uri, payload);

  if (response.data.message == "Registered") {
    return true;
  }
  return false;
};

export const getRegistrants = async (eventId) => {
  const uri = `${backendApi}/events/${eventId}/participants`;
  const response = await axios.get(uri);

  if (response.status === 200) {
    return response.data;
  }
  return [];
};

export const deleteEvent = async (eventId, token) => {
  const uri = `${backendApi}/events/${eventId}`;
  const response = await axios.delete(uri, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 200) {
    return true;
  }
  return false;
};

export const createEventMeeting = async (eventId, token, zoomToken) => {
  const uri = `${backendApi}/events/${eventId}/createMeeting`;
  const response = await axios.post(
    uri,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "zoom-auth": `Bearer ${zoomToken}`,
      },
    }
  );

  if (response.status === 201) {
    return true;
  }
  return false;
};
