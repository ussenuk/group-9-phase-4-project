
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ResetPassword } from "./ResetPassword";

export default function LoginForm() {
  const [users, setUsers] = useState([]);
  const [refreshPage, setRefreshPage] = useState(false);
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  useEffect(() => {
    console.log("FETCH!");
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
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
    <div>
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <p style={{ color: "red " }}>{formik.errors.email}</p>

        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <p style={{ color: "red " }}>{formik.errors.password}</p>

        <button type="submit">Login</button>

        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <label>
            <input type="checkbox" name="rememberMe" />
            Remember me?
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <Link to="/ResetPassword">Forgot Password?</Link>
        </div>
      </form>

      <div>
        <p>
          Don't have an account? <a href="Link to registration form">Sign up</a>
        </p>
      </div>

      <table style={{ padding: "15px" }}>
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
      </table>
    </div>
  );
}
