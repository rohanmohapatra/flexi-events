import { Grid, Stack, Typography } from "@mui/material";
import { useAuth } from "components/AuthProvider/AuthContext";
import EventDetails from "components/EventDetails";
import SignedInLayout from "components/SignedInLayout";
import CreateEvent from "components/CreateEvent";
import React, { useEffect, useState } from "react";
import { getEvents } from "services/events";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const { getToken } = useAuth();
  useEffect(() => {
    getEvents(getToken()).then((events) => {
      setEvents(events);
    });
  }, [getToken]);
  return (
    <SignedInLayout>
      <Stack>
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
      </Stack>
    </SignedInLayout>
  );
};

export default Dashboard;
