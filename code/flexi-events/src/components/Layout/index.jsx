import { Box, Stack } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Stack height="100vh">
      <Box
        sx={{
          m: "4vw 4vw 0vw 4vw",
          p: "5vw",
          bgcolor: "#130303",
          borderRadius: "6px",
          boxShadow: "10",
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default Layout;
