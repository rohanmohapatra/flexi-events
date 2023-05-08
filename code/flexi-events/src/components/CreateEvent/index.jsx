import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { useAuth } from "components/AuthProvider/AuthContext";
import moment from "moment";
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
  const [dates, setDates] = useState({ startDate: "", endDate: "" });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreate = (data) => {
    const payload = { ...data, ...dates };
    createEvent(payload, getToken()).then(({ type, message }) => {
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
            <MobileDateTimePicker
              label="Start date and time"
              value={dates.startDate}
              onChange={(newValue) =>
                setDates((dates) => ({ ...dates, startDate: newValue }))
              }
              sx={{ width: "100%" }}
            />
            <MobileDateTimePicker
              label="End date and time"
              value={dates.endDate}
              onChange={(newValue) =>
                setDates((dates) => ({ ...dates, endDate: newValue }))
              }
              sx={{ width: "100%" }}
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
