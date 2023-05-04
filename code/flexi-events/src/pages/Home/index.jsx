import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import FlexiEventsTitle from "components/FlexiEventsTitle";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        m: "4vw 4vw 0vw 4vw",
        p: "5vw",
        bgcolor: "#130303",
        borderRadius: "6px",
        position: "absolute",
        boxShadow: "10",
        height: "60%",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="space-between"
        height="100%"
      >
        <Grid item xs={12}>
          <FlexiEventsTitle variant="h3" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ display: "flex", justifyContent: "center", color: "#808081" }}
          >
            A platform for virtual events
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#E6E6E6",
              textAlign: "center",
            }}
          >
            Our goal is to create a one-stop platform where content creators and
            tech enthusiasts can host tech-related webinars and virtual
            conferences. Users can host, search, and register for events of
            their liking. We support integrations with various
            video-conferencing softwares and calendar softwares so that you
            won't miss a single event.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{ display: "flex", justifyContent: "center", columnGap: "2vw" }}
          >
            <Button variant="contained" onClick={() => navigate("/signup")}>
              Organizers
            </Button>
            <Button variant="contained">Attendees</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#808081",
              textAlign: "center",
            }}
          >
            Developers: Rohan Mohapatra, Kwangoh Kang, Wen Yao Ho
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default HomePage;
