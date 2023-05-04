import { Stack, Typography } from "@mui/material";
import SignedInLayout from "components/SignedInLayout";
import React from "react";

const Dashboard = () => {
  return (
    <SignedInLayout>
      <Stack color="white">
        <Typography variant="h5">My events:</Typography>
      </Stack>
    </SignedInLayout>
  );
};

export default Dashboard;
