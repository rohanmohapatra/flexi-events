import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AttendeesPage from "./pages/Attendees";
import OrganizersPage from "./pages/Organizers";
import SignUpPage from "./pages/SignUp";
import { AuthProvider } from "components/AuthProvider/AuthProvider";
import CreateProfile from "pages/CreateProfile";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="attendees" element={<AttendeesPage />}></Route>
        <Route path="organizers" element={<OrganizersPage />}></Route>
        <Route path="createProfile" element={<CreateProfile />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
