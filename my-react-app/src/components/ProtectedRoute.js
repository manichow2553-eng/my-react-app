
import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../services/auth";

// ProtectedRoute remains mostly logic, but you can wrap children in a Container for consistent spacing
import { Container } from "@mui/material";

export default function ProtectedRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }
  return <Container maxWidth="md">{children}</Container>;
}
