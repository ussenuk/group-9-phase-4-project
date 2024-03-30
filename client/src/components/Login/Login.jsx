import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

function Login({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:5555/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log("User received from server:", user);
          if (typeof setUser === 'function') {
            setUser(user);
            // Redirect to dashboard after successful login
            console.log("setUser called");
            navigate("/dashboard");
          }
        });
      } else {
        console.log("Login failed. Server response:", r);
        // Handle login failure (e.g., show error message)
      }
    })
    .catch((error) => {
      console.error("Error during login request:", error);
      // Handle network or other errors
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out mt-4" type="submit">Login</button>
      </form>
    </div>
  );
}


export default Login;