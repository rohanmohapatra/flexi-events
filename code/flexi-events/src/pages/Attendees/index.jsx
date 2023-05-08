import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AttendeesLayout from "components/AttendeesLayout";
import { grey } from "@mui/material/colors";
import moment from "moment";
import { getEventsPublic } from "services/events";

const EventDetails = (props) => {
  const { eventId, eventTitle, eventDescription, startDate, endDate } = props;
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
  return (
    <Card sx={{ bgcolor: "white" }} key={eventId}>
      <CardContent>
        <Stack spacing={5}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="black"
            fontWeight="600"
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
          <Typography variant="body2" color={grey[600]}>
            {eventDescription}
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
        <Button size="small" sx={{ color: "primary.dark", fontWeight: 600 }}>
          Register
        </Button>
      </CardActions>
    </Card>
  );
};

function AttendeesPage() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEventsPublic().then((events) => {
      setEvents(events);
    });
  }, []);
  return (
    <AttendeesLayout>
      <Stack>
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
