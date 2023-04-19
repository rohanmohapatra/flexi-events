import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "components/Layout";
import React from "react";

const CreateProfile = () => {
  return (
    <Layout>
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        color="white"
        spacing={7}
      >
        <Typography variant="h5" component="h2">
          CREATE YOUR PROFILE
        </Typography>
        <Stack width="40%" alignItems="center" spacing={5}>
          <Avatar sx={{ width: "7rem", height: "7rem" }}></Avatar>
          <TextField
            label="Name"
            id="name"
            aria-describedby="name-text"
            focused
            fullWidth
            sx={{ input: { color: "white" } }}
          />
          <TextField
            label="Email"
            id="email"
            aria-describedby="email-text"
            focused
            fullWidth
            sx={{ input: { color: "white" } }}
          />
          <TextField
            label="Phone Number"
            id="phone-number"
            aria-describedby="phone-text"
            focused
            fullWidth
            sx={{ input: { color: "white" } }}
          />
          <TextField
            label="Role at your organization"
            id="role"
            aria-describedby="role-text"
            focused
            fullWidth
            sx={{ input: { color: "white" } }}
          />
          <FormControl variant="outlined" sx={{ minWidth: "100%" }} focused>
            <InputLabel id="pronouns-label" sx={{ color: "white" }}>
              Pronouns
            </InputLabel>
            <Select labelId="pronouns-label" id="pronouns" label="Pronouns">
              <MenuItem value="He/Him">
                <em>He/Him</em>
              </MenuItem>
              <MenuItem value="She/Her">She/Her</MenuItem>
              <MenuItem value="They/Them">They/Them</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained">Save</Button>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default CreateProfile;
