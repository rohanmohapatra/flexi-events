import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AttendeesPage from "./pages/Attendees";
import OrganizersPage from "./pages/Organizers";
import SignUpPage from "./pages/SignUp";
import { AuthProvider } from "components/AuthProvider/AuthProvider";
import CreateProfile from "pages/CreateProfile";
import Calendar from "pages/Calendar";
import CreateEvent from "pages/CreateEvent";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import { ProtectedRoute } from "components/AuthProvider/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="signup" element={<SignUpPage />}></Route>
          <Route path="attendees" element={<AttendeesPage />}></Route>
          <Route path="organizers" element={<OrganizersPage />}></Route>
          <Route path="calendar" element={<Calendar />}></Route>
          <Route path="createProfile" element={<CreateProfile />}></Route>
          <Route path="createEvent" element={<CreateEvent />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </LocalizationProvider>
    </AuthProvider>
  );
}

export default App;
