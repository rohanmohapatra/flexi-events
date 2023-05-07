import React from "react";
import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const EventDetails = (props) => {
  const { eventId, eventTitle, eventDescription, creatorName } = props;
  const navigate = useNavigate();
  return (
    <Card sx={{ bgcolor: "white" }} key={eventId}>
      <CardActionArea onClick={() => navigate(`/events/${eventId}`)}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="black"
            fontWeight="600"
          >
            {eventTitle}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color={grey[500]}
          >
            {creatorName}
          </Typography>
          <Typography variant="body2" color={grey[600]}>
            {eventDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventDetails;
