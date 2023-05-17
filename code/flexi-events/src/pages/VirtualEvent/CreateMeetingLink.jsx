import { Alert, Button, Snackbar } from "@mui/material";
import { useAuth } from "components/AuthProvider/AuthContext";
import React, { useState } from "react";
import { createEventMeeting } from "services/events";

export const CreateMeetingLink = (props) => {
  const [open, setOpen] = useState({ value: false, type: "" });
  const handleClose = () => {
    setOpen({ value: false, type: "" });
    props.shouldUpdateEvent();
  };
  const { getToken } = useAuth();

  const createLink = () => {
    const zoomToken = localStorage.getItem("zoom.token");
    if (!zoomToken) {
      setOpen({ value: true, type: "not-signed" });
    }
    // else do rest
    createEventMeeting(props.eventId, getToken(), zoomToken).then((value) => {
      if (value) {
        setOpen({ value: true, type: "created" });
      } else {
        setOpen({ value: true, type: "could-not" });
      }
    });
  };
  const getAlert = () => {
    if (open.type == "not-signed") {
      return (
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          You are not signed into Zoom!
        </Alert>
      );
    }
    if (open.type == "could-not") {
      return (
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Could not create zoom invite!
        </Alert>
      );
    }
    if (open.type == "created") {
      return (
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Created Zoom Meeting invite!
        </Alert>
      );
    }
  };

  return (
    <>
      <Button variant="contained" onClick={createLink}>
        Create Meeting Link
      </Button>
      <Snackbar open={open.value} autoHideDuration={2000} onClose={handleClose}>
        {getAlert()}
      </Snackbar>
    </>
  );
};
