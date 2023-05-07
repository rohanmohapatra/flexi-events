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
  CircularProgress,
  } from "@mui/material";
import Layout from "components/Layout";
import React, { useEffect, useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import FlexiEventsTitle from "components/FlexiEventsTitle";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import { CassandraService } from '../../../../service/src/cassandra/cassandra.service';

import { ThemeProvider, createTheme } from "@mui/material";
import { getMe } from "services/users";
import { useAuth } from "components/AuthProvider/AuthContext";
import SignedInLayout from "components/SignedInLayout";

    
    


  const Profile = () => {
    
    const { getToken } = useAuth();
    const [user, setUser] = useState({});
    useEffect(() => {
      getMe(getToken()).then((userData) => setUser(userData));
    }, [getToken]);
    return (
        
      <SignedInLayout>
        <Stack
          width="100%"
          height="100%"
          alignItems="center"
          color="white"
          spacing={7}
        >

        <Typography variant="h5" component="h2">
             {user.email}
          </Typography>

          <Typography variant="h5" component="h2">
            YOUR PROFILE
          </Typography>
          <Stack width="40%" alignItems="center" spacing={5}>
            <Avatar sx={{ width: "7rem", height: "7rem" }}></Avatar>
            
          </Stack>

          <Typography sx={{ fontSize:20, color:"red" }}variant="h5" component="h2">
            Name {" :"}
          <Typography sx={{ fontSize:15, color:"white" }}variant="h5" component="span">
            {user.name}
          </Typography>
          </Typography>
          <Typography variant="h5" component="h2">
            Email  {user.email}
          </Typography>
          <Typography variant="h5" component="h2">
          {user.phoneNumber}
          </Typography>
          <Typography variant="h5" component="h2">
            Role {user.role}
          </Typography>
          <Typography variant="h5" component="h2">
            Pronouns {user.pronouns}
          </Typography>
        </Stack>
      </SignedInLayout>
    );
  };
  
  export default Profile;
  