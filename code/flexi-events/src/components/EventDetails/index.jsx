import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const EventDetails = (props) => {
  const { eventTitle, eventDescription, creatorName } = props;
  return (
    <Card sx={{ bgcolor: "white" }}>
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
        <Typography gutterBottom variant="h6" component="div" color={grey[500]}>
          {creatorName}
        </Typography>
        <Typography variant="body2" color={grey[600]}>
          {eventDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventDetails;
