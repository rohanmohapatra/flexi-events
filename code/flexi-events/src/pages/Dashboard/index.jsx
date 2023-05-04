import { Grid, Stack, Typography, useTheme } from "@mui/material";
import { useAuth } from "components/AuthProvider/AuthContext";
import EventDetails from "components/EventDetails";
import SignedInLayout from "components/SignedInLayout";
import React, { useEffect, useState } from "react";
import { getEvents } from "services/events";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const { getToken } = useAuth();
  useEffect(() => {
    getEvents(getToken()).then((events) => {
      setEvents(events);
    });
  }, []);
  return (
    <SignedInLayout>
      <Stack>
        <Typography variant="h5" color="white">
          My events:
        </Typography>
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
