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
import { useAuth } from "components/AuthProvider/AuthContext";
import FlexiEventsTitle from "components/FlexiEventsTitle";
import Layout from "components/Layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProfile } from "services/users";

const CreateProfile = () => {
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    phoneNumber: "",
    role: "",
    pronouns: "",
  });
  const handleName = (event) => {
    setProfile((p) => ({ ...p, name: event.target.value }));
  };
  const handlePhoneNumber = (event) => {
    setProfile((p) => ({ ...p, phoneNumber: event.target.value }));
  };
  const handleRole = (event) => {
    setProfile((p) => ({ ...p, role: event.target.value }));
  };
  const handlePronouns = (event) => {
    setProfile((p) => ({ ...p, pronouns: event.target.value }));
  };
  const handleSubmit = async () => {
    const status = await createProfile(getToken(), profile);
    if (status) {
      navigate("/login");
    }
  };
  return (
    <Layout>
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        color="white"
        spacing={7}
      >
        <Stack alignItems="center" spacing={3}>
          <FlexiEventsTitle variant="h4" />
          <Typography sx={{ color: "#808081" }}>
            A platform for virtual events
          </Typography>
          <Typography variant="h4" color="primary.light" fontWeight="600">
            Create your profile.
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center" spacing={5}>
          <Avatar sx={{ width: "7rem", height: "7rem" }}></Avatar>
          <TextField
            label="Name"
            id="name"
            aria-describedby="name-text"
            focused
            fullWidth
            required
            value={profile.name}
            onChange={handleName}
            sx={{ input: { color: "white" } }}
          />
          <TextField
            label="Phone Number"
            id="phone-number"
            aria-describedby="phone-text"
            focused
            fullWidth
            required
            value={profile.phoneNumber}
            onChange={handlePhoneNumber}
            sx={{ input: { color: "white" } }}
          />
          <TextField
            label="Role at your organization"
            id="role"
            aria-describedby="role-text"
            focused
            fullWidth
            required
            value={profile.role}
            onChange={handleRole}
            sx={{ input: { color: "white" } }}
          />
          <FormControl
            variant="outlined"
            sx={{ minWidth: "100%" }}
            focused
            required
          >
            <InputLabel id="pronouns-label" sx={{ color: "white" }}>
              Pronouns
            </InputLabel>
            <Select
              labelId="pronouns-label"
              id="pronouns"
              label="Pronouns"
              value={profile.pronouns}
              onChange={handlePronouns}
            >
              <MenuItem value="He/Him">
                <em>He/Him</em>
              </MenuItem>
              <MenuItem value="She/Her">She/Her</MenuItem>
              <MenuItem value="They/Them">They/Them</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default CreateProfile;
