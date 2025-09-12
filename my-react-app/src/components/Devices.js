
import React, { useEffect, useState } from "react";
import api from "../services/api";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Box
} from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";

export default function Devices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    api.get("/devices")
      .then(res => setDevices(res.data))
      .catch(console.error);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Your Devices
          </Typography>
          <List>
            {devices.length === 0 ? (
              <Typography align="center" color="text.secondary">
                No devices found.
              </Typography>
            ) : (
              devices.map(device => (
                <ListItem key={device.id} divider>
                  <ListItemIcon>
                    <DevicesIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={device.name}
                    secondary={device.type || "Unknown type"}
                  />
                </ListItem>
              ))
            )}
          </List>
        </Paper>
      </Box>
    </Container>
  );
}
