import React, { useState } from "react";
import api from "../services/api";
import { saveToken } from "../services/auth";

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
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      /><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      /><br/>
      <button type="submit">Login</button>
      {error && <p style={{color:"red"}}>{error}</p>}
    </form>
  );
}
