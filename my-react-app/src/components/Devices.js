import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Devices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    api.get("/devices")
      .then(res => setDevices(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Your Devices</h2>
      <ul>
        {devices.map(device => (
          <li key={device.id}>{device.name}</li>
        ))}
      </ul>
    </div>
  );
}
