import { AppBar, Divider, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AttendeesLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Stack
      paddingTop="1rem"
      flexGrow="1"
      sx={{ backgroundColor: "#130303" }}
      height="100vh"
      paddingX="10vw"
      spacing={4}
    >
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="flex-start"
            flexGrow="1"
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
          >
            <Typography variant="h4" component="div" color="primary.light">
              flexi
            </Typography>
            <Typography
              variant="h4"
              component="div"
              color="primary.dark"
              fontWeight="bold"
            >
              EVENTS
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Divider sx={{ bgcolor: "#a7a7b5", height: "0.1rem" }} />
      {children}
    </Stack>
  );
};

export default AttendeesLayout;
