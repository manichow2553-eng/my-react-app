
import React, { useState } from "react";
import api from "../services/api";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert
} from "@mui/material";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      await api.post("/auth/register", { username, password });
      setMessage("User registered successfully!");
    } catch (err) {
      setMessage("Registration failed!");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Register
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
              Register
            </Button>
            {message && (
              <Alert severity={message.includes("successfully") ? "success" : "error"} sx={{ mt: 2 }}>
                {message}
              </Alert>
            )}
          </form>
        </Paper>
      </Box>
    </Container>
  );
}
