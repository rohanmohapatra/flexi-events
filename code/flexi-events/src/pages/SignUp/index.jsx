import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import FlexiEventsTitle from "components/FlexiEventsTitle";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/auth";

function SignUpPage() {                             // State variable to track loading state
  const [loading, setLoading] = useState(false);    // Function for navigating to different pages
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);       // Get form data
    const payload = {
      email: data.get("email"),                           // Get email value from form
      password: data.get("password"),                     // Get password value from form
    };
    signup(payload).then((value) => {      
      setLoading(value);          // Set loading state based on the result of signup function
      localStorage.setItem("signup.email", payload.email.toString());
      navigate("/createProfile");
    });
  };
  return (
    <Box
      sx={{
        m: "4vw 4vw 0vw 4vw",
        p: "5vw",
        bgcolor: "#000000",
        borderRadius: "6px",
        boxShadow: "10",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12}>
          <FlexiEventsTitle variant="h4" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ display: "flex", justifyContent: "center", color: "#808081" }}
          >
            A platform for virtual events
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              rowGap: "1vw",
              columnGap: "2vw",
            }}
          >
            <Button
              variant="contained"
              sx={{ fontSize: 15, width: 400, m: 1, p: 2 }}
            >
              Login with Google
            </Button>
            <Button
              variant="contained"
              sx={{ fontSize: 15, width: 400, m: 1, p: 2 }}
            >
              Login with Apple ID
            </Button>
            <Button
              variant="contained"
              sx={{ fontSize: 15, width: 400, m: 1, p: 2 }}
              onClick={() => navigate("/login")}
            >
              Login with Flexi-Events
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ display: "flex", justifyContent: "center", color: "#808081" }}
          >
            Or sign up by Filling the Following
          </Typography>
        </Grid>
      </Grid>

      <Container component="main" maxWidth="xs" sx={{ paddingTop: "2rem" }}>
        <Stack alignItems="center">
          <Typography
            variant="h4"
            color="primary.light"
            fontWeight="600"
            textAlign="center"
          >
            Sign up to join the Awesomeness.
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={1}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="default" />
                  }
                  sx={{ color: "white" }}
                  label="By signing up, I agree to the following"
                />
              </Grid>
              <Grid item>
                <a color="black" href="https://www.sjsu.edu/cs/">
                  Terms and Conditions
                </a>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {/* {loading ? "Sign Up" : <CircularProgress />} */}
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default SignUpPage;
