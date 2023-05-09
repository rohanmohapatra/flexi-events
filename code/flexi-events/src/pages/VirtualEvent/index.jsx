import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useAuth } from "components/AuthProvider/AuthContext";
import SignedInLayout from "components/SignedInLayout";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteEvent, getEvent, getRegistrants } from "services/events";
import { CreateMeetingLink } from "./CreateMeetingLink";

const VirtualEvent = () => {
  const { eventId } = useParams();
  const { getToken } = useAuth();
  const [event, setEvent] = useState({
    eventTitle: "",
    eventDescription: "",
    startDate: "",
    endDate: "",
    eventLink: "",
  });

  const [updateEvent, setUpdateEvent] = useState(false);
  const shouldUpdateEvent = () => setUpdateEvent((updateEvent) => !updateEvent);

  const navigate = useNavigate();

  const [registrants, setRegistrants] = useState([]);
  useEffect(() => {
    getEvent(eventId, getToken()).then((eventData) => setEvent(eventData));
  }, [updateEvent]);

  useEffect(() => {
    getRegistrants(eventId).then((data) => setRegistrants(data));
  }, [eventId]);

  const handleDelete = () => {
    deleteEvent(eventId, getToken()).then((value) => {
      if (value) {
        navigate("/dashboard");
      }
    });
  };

  return (
    <SignedInLayout height="100vh">
      {event && (
        <Stack>
          <Paper
            sx={{
              width: "40rem",
              padding: "2rem",
              bgcolor: "white",
              color: "black",
            }}
          >
            <Typography variant="h4" fontWeight="600">
              {event.eventTitle}
            </Typography>
          </Paper>
          {/* <Paper
          sx={{
            width: "45rem",
            padding: "2rem",
            bgcolor: "#130303",
            backgroundImage:
              "linear-gradient(to bottom, rgba(7, 1, 1, 1) 35%, rgba(80, 80, 100, 1) 100%)",
          }}
        > */}
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={2} color="white" paddingY="3rem">
              <Stack direction="row" justifyContent="flex-start" spacing={2}>
                <Typography
                  variant="h6"
                  fontWeight="500"
                  component="div"
                  width="7rem"
                  color="primary.light"
                >
                  Description:
                </Typography>
                <Typography variant="body2">
                  {event.eventDescription}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="flex-start" spacing={2}>
                <Typography
                  variant="h6"
                  fontWeight="500"
                  component="div"
                  width="7rem"
                  color="primary.light"
                >
                  Start Date:
                </Typography>
                <Typography variant="body2">
                  {new Date(event.startDate).toString()}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="flex-start" spacing={2}>
                <Typography
                  variant="h6"
                  fontWeight="500"
                  component="div"
                  width="7rem"
                  color="primary.light"
                >
                  End Date:
                </Typography>
                <Typography variant="body2">
                  {new Date(event.endDate).toString()}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="flex-start" spacing={2}>
                <Typography
                  variant="h6"
                  fontWeight="500"
                  component="div"
                  width="7rem"
                  color="primary.light"
                >
                  Event Link:
                </Typography>
                {event.eventLink != null ? (
                  <Typography variant="body2">
                    <Link to={event.eventLink}>{event.eventLink}</Link>
                  </Typography>
                ) : (
                  <CreateMeetingLink
                    eventId={eventId}
                    shouldUpdateEvent={shouldUpdateEvent}
                  />
                )}
              </Stack>
              <Stack direction="row" justifyContent="flex-start" spacing={2}>
                <Button variant="outlined" onClick={handleDelete}>
                  Delete event
                </Button>
              </Stack>
            </Stack>
            <Stack width="20rem">
              <Typography
                variant="h6"
                fontWeight="500"
                component="div"
                width="7rem"
                color="primary.light"
              >
                Registrations:
              </Typography>
              <List sx={{ color: "white" }}>
                {registrants.map((d) => (
                  <ListItem>
                    <ListItemText
                      primary={d.name}
                      secondary={d.email}
                      key={d.email}
                    />
                  </ListItem>
                ))}
              </List>
            </Stack>
            {/* </Paper> */}
          </Stack>
        </Stack>
      )}
    </SignedInLayout>
  );
};

export default VirtualEvent;
