import { CircularProgress, Stack, Typography } from "@mui/material";
import FlexiEventsTitle from "components/FlexiEventsTitle";
import Layout from "components/Layout";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ZoomAuth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (searchParams.has("accessToken")) {
      localStorage.setItem("zoom.token", searchParams.get("accessToken"));
      searchParams.delete("accessToken");
      setSearchParams(searchParams);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [searchParams, setSearchParams]);
  return (
    <Layout>
      <FlexiEventsTitle variant="h4" />
      <Stack alignItems="center" spacing={5} paddingTop="5rem">
        <CircularProgress />
        <Typography variant="h6" color="white" fontWeight="600">
          Authorizing with Zoom
        </Typography>
      </Stack>
    </Layout>
  );
};

export default ZoomAuth;
