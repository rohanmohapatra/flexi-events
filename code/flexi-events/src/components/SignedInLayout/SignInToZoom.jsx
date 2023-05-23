import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import { useAuth } from "components/AuthProvider/AuthContext";
import { zoomSignIn } from "services/thirdparty";

const SignInToZoom = () => {
  const { getToken } = useAuth();
  const handleClick = async () => {
    await zoomSignIn(getToken());
  };
  return (
    <Button
      variant="contained"
      sx={{
        display: "block",
        fontWeight: "600",
        textTransform: "capitalize",
        borderRadius: "0",
        paddingY: "0",
        paddingX: "0.2rem",
        fontSize: "1.2rem",
        color: "white",
        bgcolor: "black",
      }}
      onClick={handleClick}
    >
      <LoginIcon /> Sign in to Zoom
    </Button>
  );
};

export default SignInToZoom;
