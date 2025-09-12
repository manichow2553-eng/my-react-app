
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Devices from "./components/Devices";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container
} from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Device Manager
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register" >
              Register
            </Button>
            <Button color="inherit" component={Link} to="/devices">
              Devices
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box mt={4}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route
            path="/devices"
            element={
              <ProtectedRoute>
                <Devices />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
