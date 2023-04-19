import { Box } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
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
      {children}
    </Box>
  );
};

export default Layout;
