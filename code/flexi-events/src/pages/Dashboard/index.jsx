import { Grid, Stack, Typography } from "@mui/material";
import { useAuth } from "components/AuthProvider/AuthContext";
import EventDetails from "components/EventDetails";
import SignedInLayout from "components/SignedInLayout";
import CreateEvent from "components/CreateEvent";
import React, { useEffect, useState } from "react";
import { getEvents } from "services/events";
//import './styles.module.css';
import { Box } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Paper } from "@mui/material";
import moment from "moment";
import data from "./sample_data.json";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const localizer = momentLocalizer(moment);

const Dashboard = () => {
  // to store a list of event objects imported from the sample_data.json file
  const [sampleEvents, setSampleEvents] = useState([]);

  // to allow event selection and display more information as needed
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);

  // map sample data to sampleEvents
  const sample_events = data.map((sampleEvents) => {
    return {
      title: sampleEvents.title,
      start: new Date(sampleEvents.start),
      end: new Date(sampleEvents.end),
    };
  });

  // handles the state of the dialog box when its rendered
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  // handles the state of the dialog box after closing
  const handleClose = () => {
    setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide children={undefined} direction="up" ref={ref} {...props} />;
  });

  const [events, setEvents] = useState([]);
  const { getToken } = useAuth();
  useEffect(() => {
    getEvents(getToken()).then((events) => {
      setEvents(events);
    });
  }, [getToken]);
  return (
    <SignedInLayout>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5" color="white">
            {events.length ? "My events:" : "You have not created any events"}
          </Typography>
          <CreateEvent />
        </Stack>
        <Grid container spacing={2}>
          {events.map((event) => (
            <Grid item xs={3}>
              <EventDetails {...event} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ height: "70vh", p: "2%", bgcolor: "#181919" }}>
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={sample_events}
            onSelectEvent={handleSelectEvent}
            aria-describedby="description"
          />
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
          >
            <DialogTitle>{"dialog box"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="description">
                This is the dialog box description. Figure out a way to show
                event details
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </SignedInLayout>
  );
};

export default Dashboard;
