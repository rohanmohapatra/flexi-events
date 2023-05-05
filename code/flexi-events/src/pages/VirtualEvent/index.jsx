import { Button, Paper, Stack, Typography } from "@mui/material";
import SignedInLayout from "components/SignedInLayout";
import React from "react";
import { useParams } from "react-router-dom";

const VirtualEvent = () => {
  const { eventId } = useParams();
  return (
    <SignedInLayout>
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
            This is a demo event with id {eventId}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse mollis est ac blandit egestas. Proin ac vulputate
              libero. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Nunc ac nisl vel odio tincidunt
              malesuada. Ut in feugiat metus, a ultrices sem. Aenean vel nunc
              tincidunt, lacinia odio ac, condimentum elit.
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
            <Typography variant="body2">May 4, 2023</Typography>
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
            <Typography variant="body2">May 6, 2023</Typography>
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
            <Typography variant="body2">url.com</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="flex-start" spacing={2}>
          <Button variant="outlined">Delete event</Button>
        </Stack>
        {/* </Paper> */}
      </Stack>
    </SignedInLayout>
  );
};

export default VirtualEvent;
