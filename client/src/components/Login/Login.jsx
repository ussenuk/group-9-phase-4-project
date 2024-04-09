import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function LoginForm({ onLogin, user }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  // const [username, setUsername] = useState("");
  const [refreshPage, setRefreshPage] = useState(false);
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  useEffect(() => {
    console.log("FETCH!");
    fetch("/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        console.log(users);
      });
  }, [refreshPage]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:5555/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formik.values.username,
        password: formik.values.password,
      }),
    })
      .then((response) => {
        if (response.status === 400) {
          throw new Error("Both username and password are required.");
        }
        if (!response.ok) {
          throw new Error("Invalid username or password.");
        }
        return response.json();
      })
      .then((user) => {
        onLogin(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Must enter a username")
      .min(3, "Username must be at least 3 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if (res.status == 200) {
          setRefreshPage(!refreshPage);
        }
      });
    },
  });

  return (
    <div className="login-form-container">
      <h2>
        <strong>
          <u>Login Form</u>
        </strong>
      </h2>
      <form onSubmit={handleSubmit} style={{ margin: "30px" }}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>

          <input
            id="username"
            name="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            className="form-input"
          />
        </div>
        <p className="error-message">{formik.errors.username}</p>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="form-input"
          />
        </div>
        <p className="error-message">{formik.errors.password}</p>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <label>
            <input type="checkbox" name="rememberMe" />
            Remember me?
          </label>
        </div>
        {error && <p className="error-message">{error}</p>}{" "}
        <div className="button-group">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Login
          </button>

          <div>
            <Link to="/reset-password" className="forgot-password">
              Forgot your Password?
            </Link>
          </div>
        </div>
      </form>

      <div className="button-group">
        <p>
          Don't have an account?
          <Link to="/user-registration">Click here to register...</Link>
        </p>
      </div>
    </div>
  );
}
