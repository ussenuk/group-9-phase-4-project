import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import "./Login.css";

export default function LoginForm() {
  const [users, setUsers] = useState([]);
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

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("invalid email")
      .required("Must enter an email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
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
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address:
          </label>

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-input"
          />
          <p className="error-message">{formik.errors.email}</p>
        </div>

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
          <p className="error-message">{formik.errors.password}</p>
        </div>

        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <label>
            <input type="checkbox" name="rememberMe" />
            Remember me?
          </label>
        </div>

        <div className="button-group">
          <button type="submit" className="submit-button">
            Login
          </button>

          <div>
            <Link to="/reset-password" className="forgot-password">
              Forgot your Password?
            </Link>
          </div>
        </div>
      </form>

      <div>
        <p>
          Don't have an account?{" "}
          <a href="Link to registration form">Sign up here..</a>
        </p>
      </div>

      {/* <table style={{ padding: "15px" }}>
        <tbody>
          <tr>
            <th>Email</th>
          </tr>
          {users === "undefined" ? (
            <p>Loading</p>
          ) : (
            users.map((user, i) => (
              <tr key={i}>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table> */}
    </div>
  );
}
