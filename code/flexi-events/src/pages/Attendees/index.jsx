import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Modal,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AttendeesLayout from "components/AttendeesLayout";
import { grey } from "@mui/material/colors";
import moment from "moment";
import {
  getEventsPublic,
  registerParticipant,
  searchEventsPublic,
} from "services/events";
import { useForm } from "react-hook-form";
import SearchBar from "components/SearchBar";

const EventDetails = (props) => {
  const {
    eventId,
    eventTitle,
    eventDescription,
    startDate,
    endDate,
    creatorName,
  } = props;
  let { keywords } = props;
  keywords = keywords ?? [];
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleAlertClose = () => setAlertOpen(false);
  const getDate = () => {
    return `${moment(startDate).format("DD-MMM-YYYY")} - ${moment(
      endDate
    ).format("DD-MMM-YYYY")}`;
  };
  const getTime = () => {
    return `${moment(startDate).format("h:mm:ss a")} - ${moment(endDate).format(
      "h:mm:ss a"
    )}`;
  };

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

  const handleRegister = (data) => {
    registerParticipant(eventId, data).then((value) => {
      setAlertOpen(value);
      handleClose();
    });
  };

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  return (
    <>
      <Card
        sx={{
          bgcolor: "white",
        }}
        key={eventId}
      >
        <CardContent>
          <Stack spacing={2}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="black"
              fontWeight="600"
              height="2rem"
            >
              {eventTitle}
            </Typography>
            {/* <Typography
              gutterBottom
              variant="h6"
              component="div"
              color={grey[500]}
            >
              {creatorName}
            </Typography> */}
            <Typography variant="body2" color={grey[600]} height="3.5rem">
              {truncate(eventDescription, 100)}
            </Typography>
            <Stack direction="row" height="2rem">
              {keywords.map((keyword) => (
                <Chip
                  sx={{ color: "white", bgcolor: "primary.dark" }}
                  label={keyword}
                  variant="outlined"
                />
              ))}
            </Stack>
            <Typography
              variant="body2"
              color={grey[600]}
              height="1.5rem"
              sx={{ fontWeight: "700" }}
            >
              Creator: {creatorName}
            </Typography>
            <Stack spacing={1}>
              <Chip
                sx={{ color: "black" }}
                label={getDate()}
                variant="outlined"
              />
              <Chip
                sx={{ color: "white", bgcolor: "primary.dark" }}
                label={getTime()}
                variant="outlined"
              />
            </Stack>
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            size="small"
            sx={{ color: "primary.dark", fontWeight: 600 }}
            onClick={() => setOpen(true)}
          >
            Register
          </Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Stack color="white" sx={style} spacing={5}>
          <Typography variant="h5" component="h2">
            Register for the event
          </Typography>
          <Stack alignItems="center" spacing={3}>
            <TextField
              label="Name"
              id="name"
              aria-describedby="name-text"
              focused
              fullWidth
              required
              {...register("name", { required: true })}
            />
            <TextField
              label="Email"
              id="email"
              aria-describedby="email-text"
              focused
              fullWidth
              required
              type="email"
              {...register("email", { required: true })}
            />
            <TextField
              id="phoneNumber"
              label="PhoneNumber"
              focused
              fullWidth
              required
              {...register("phoneNumber", { required: false })}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" onClick={() => handleClose()}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit(handleRegister)}>
              Create
            </Button>
          </Stack>
        </Stack>
      </Modal>
      <Snackbar
        open={alertOpen}
        autoHideDuration={2000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Registered for {eventTitle}
        </Alert>
      </Snackbar>
    </>
  );
};

function AttendeesPage() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getEventsPublic().then((events) => {
      setEvents(events);
    });
  }, []);
  const handleSearch = () => {
    if (search === "") {
      handleCancel();
    }
    searchEventsPublic(search).then((events) => {
      setEvents(events);
    });
  };

  const handleCancel = () => {
    getEventsPublic().then((events) => {
      setEvents(events);
    });
  };
  return (
    <AttendeesLayout>
      <Stack spacing={4}>
        <Stack width="30rem" pl="1rem">
          <SearchBar
            // @ts-ignore
            value={search}
            onChange={(newValue) => setSearch(newValue)}
            onRequestSearch={handleSearch}
            onCancelSearch={handleCancel}
            cancelOnEscape
            placeholder="Search..."
          />
        </Stack>
        <Grid container spacing={2}>
          {events.map((event) => (
            <Grid item xs={4}>
              <EventDetails {...event} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </AttendeesLayout>
  );
}

export default AttendeesPage;
