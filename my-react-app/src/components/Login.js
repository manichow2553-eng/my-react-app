
import React, { useState } from "react";
import api from "../services/api";
import { saveToken } from "../services/auth";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert
} from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await api.post("/auth/login", { username, password });
      saveToken(response.data);
      alert("Login successful!");
      // Redirect or load protected page
      window.location.href = "/devices";
      //
      Navigator.push("/devices");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
            )}
          </form>
        </Paper>
      </Box>
    </Container>
  );
}
