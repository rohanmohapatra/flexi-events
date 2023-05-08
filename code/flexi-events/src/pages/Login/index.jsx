import {
  Alert,
  Button,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "components/AuthProvider/AuthContext";
import FlexiEventsTitle from "components/FlexiEventsTitle";
import Layout from "components/Layout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { onLogin } = useAuth();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [snackbar, setSnackbar] = useState({ open: false, type: "success" });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await onLogin(data);
    setSnackbar({ open: true, type: result ? "success" : "failure" });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
    navigate(snackbar.type === "success" ? "/dashboard" : "/login");
  };

  return (
    <Layout>
      <Stack alignItems="center" spacing={7}>
        <Stack alignItems="center" spacing={3}>
          <FlexiEventsTitle variant="h4" />
          <Typography sx={{ color: "#808081" }}>
            A platform for virtual events
          </Typography>
          <Typography variant="h4" color="primary.light" fontWeight="600">
            Sign in to create an event.
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center" spacing={5}>
          <TextField
            label="Email"
            id="email"
            focused
            fullWidth
            type="email"
            sx={{ input: { color: "white" } }}
            {...register("email", { required: true })}
          />
          <TextField
            label="Password"
            id="password"
            focused
            fullWidth
            type="password"
            sx={{ input: { color: "white" } }}
            {...register("password", { required: true })}
          />
        </Stack>
        <Stack alignItems="center">
          <Button
            variant="contained"
            sx={{ width: "10rem" }}
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
          <Link href="/signup">
            <Typography>Don't have an account? Signup now!</Typography>
          </Link>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
          >
            {snackbar.type === "success" ? (
              <Alert
                onClose={handleSnackbarClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Login successfull 🎉
              </Alert>
            ) : (
              <Alert
                onClose={handleSnackbarClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Could not log you in 😔
              </Alert>
            )}
          </Snackbar>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Login;
