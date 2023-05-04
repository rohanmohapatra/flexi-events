import {
  AppBar,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignedInLayout = ({ children }) => {
  const pages = ["dashboard", "profile"];
  const location = useLocation();
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
          <Stack direction="row" spacing={2}>
            {pages.map((page) => (
              <Button
                key={page}
                variant="contained"
                onClick={() => navigate("/" + page)}
                sx={{
                  display: "block",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  borderRadius: "0",
                  paddingY: "0",
                  paddingX: "0.2rem",
                  fontSize: "1.2rem",
                  backgroundColor:
                    "/" + page === location.pathname ? "white" : "black",
                  color: "/" + page === location.pathname ? "black" : "white",
                }}
              >
                {page}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Divider sx={{ bgcolor: "#a7a7b5", height: "0.1rem" }} />
      {children}
    </Stack>
  );
};

export default SignedInLayout;