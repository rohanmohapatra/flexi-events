import { Stack, Typography } from "@mui/material";
import React from "react";

const FlexiEventsTitle = ({ variant }) => {
  return (
    <Stack direction="row" justifyContent="center">
      <Typography variant={variant} color="primary.light">
        flexi
      </Typography>
      <Typography variant={variant} color="primary.dark" fontWeight="bold">
        EVENTS
      </Typography>
    </Stack>
  );
};

export default FlexiEventsTitle;
