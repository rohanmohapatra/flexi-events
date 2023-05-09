
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


import { ThemeProvider, createTheme } from "@mui/material";
import { getMe } from "services/users";
import { useAuth } from "components/AuthProvider/AuthContext";
import SignedInLayout from "components/SignedInLayout";

const AboutUs = () => {
    
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
        
        <Typography sx={{ fontSize:24, color:"#ccccff", mt:2 }} variant="h5" component="h2">
            About Us
            </Typography>

        
        

          
          <Typography sx={{ fontSize:22, color:"#fff0db", pb:30  }}variant="h5" component="h2">
          Flexi-Events’ goal is to create a platform where content creators, tech enthusiasts and companies
can host webinars and virtual conferences with a click of a button. This is a one-stop solution to
create a single-day/multi-day event, search and register for events and increase your knowledge.
It will support integrations with various video-conferencing software platforms to make it easy
for organizers to schedule events.
          

          </Typography>

          <Typography sx={{ fontSize:20, color:"#ccccff", pb:40 }} variant="h5" component="h2">
            On a Nice day in May,2023. The Flexi team presents
            </Typography>

         
          

        </Stack>
      </SignedInLayout>
    );
  };
  
  export default AboutUs;