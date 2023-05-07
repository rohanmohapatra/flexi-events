import { Alert, Button, Snackbar } from "@mui/material";
import React, { useState } from "react";

export const CreateMeetingLink = () => {
  const [open, setOpen] = useState({ value: false, type: "" });
  const handleClose = () => setOpen({ value: false, type: "" });

  const createLink = () => {
    const zoomToken = localStorage.getItem("zoom.token");
    if (!zoomToken) {
      setOpen({ value: true, type: "not-signed" });
    }
    // else do rest
  };
  const getAlert = () => {
    if (open.type == "not-signed") {
      return (
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          You are not signed into Zoom!
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
