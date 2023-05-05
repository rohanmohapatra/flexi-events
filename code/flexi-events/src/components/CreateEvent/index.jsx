import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useAuth } from "components/AuthProvider/AuthContext";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createEvent } from "services/events";

const CreateEvent = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [didCreate, setDidCreate] = useState(false);
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreate = (data) => {
    createEvent(data, getToken()).then(({ type, message }) => {
      setDidCreate(type);
      if (type) {
        navigate("/events/" + message);
      }
    });
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Create Event
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Stack color="white" sx={style} spacing={5}>
          <Typography variant="h5" component="h2">
            Create your event
          </Typography>
          <Stack alignItems="center" spacing={3}>
            <TextField
              label="Event Title"
              id="title"
              aria-describedby="title-text"
              focused
              fullWidth
              required
              {...register("eventTitle", { required: true })}
            />
            <TextField
              id="description"
              label="Event Description"
              multiline
              rows={4}
              fullWidth
              {...register("eventDescription", { required: false })}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" onClick={() => handleClose()}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit(handleCreate)}>
              Create
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default CreateEvent;
