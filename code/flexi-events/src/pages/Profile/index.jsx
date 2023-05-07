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
import React, { useState } from "react";

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

    
    


  const Profile = () => {
    

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
            {user.username} {user.email}
          </Typography>

          <Typography variant="h5" component="h2">
            YOUR PROFILE
          </Typography>
          <Stack width="40%" alignItems="center" spacing={5}>
            <Avatar sx={{ width: "7rem", height: "7rem" }}></Avatar>
            
          </Stack>

          <Typography variant="h5" component="h2">
            Name 
          </Typography>
          <Typography variant="h5" component="h2">
            Email
          </Typography>
          <Typography variant="h5" component="h2">
            Phone Number
          </Typography>
          <Typography variant="h5" component="h2">
            Role
          </Typography>
          <Typography variant="h5" component="h2">
            Pronouns
          </Typography>
        </Stack>
      </Layout>
    );
  };
  
  export default Profile;
  