import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Registration({ onLogin, user }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [refreshPage, setRefreshPage] = useState(false);
  const [error, setError] = useState(null);

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
    fetch("http://127.0.0.1:5555/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formik.values.username,
        fullname: formik.values.fullname,
        age: formik.values.age,
        gender: formik.values.gender,
        role: formik.values.role,
        password: formik.values.password,
        confirm_password: formik.values.confirm_password,
      }),
    })
      .then((response) => {
        if (response.status === 500) {
          throw new Error("User already exists.");
        }
        if (!response.ok) {
          throw new Error("Failed to register user.");
        }
        return response.json();
      })
      .then((user) => {
        
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
        if (error.message === "User already exists.") {
          // Display specific message for existing user
          setError("User already exists. Please choose a different username.");
        }
      });
  }

  const formSchema = yup.object().shape({
    username: yup.string().required("Username is required").min(3, "Username must be at least 3 characters"),
    fullname: yup.string().required("Full Name is required"),
    age: yup.string().required("Age is required"),
    gender: yup.string().required("Gender is required"),
    role: yup.string().required("Role is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      age: "",
      gender: "",
      role: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("http://127.0.0.1:5555/signup", {
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
    <div className="login-form-container" style={{ margin: "180px" }}>
      <h2>
        <strong>
          <u>New User Registration Form</u>
        </strong>
      </h2>
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
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
          <label htmlFor="fullname" className="form-label">
            Full Name:
          </label>

          <input
            id="fullname"
            name="fullname"
            type="text"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            className="form-input"
          />
          
        </div>
        <p className="error-message">{formik.errors.fullname}</p>
        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age:
          </label>

          <input
            id="age"
            name="age"
            type="text"
            value={formik.values.age}
            onChange={formik.handleChange}
            className="form-input"
          />
          
        </div>
        <p className="error-message">{formik.errors.age}</p>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>

          <input
            id="gender"
            name="gender"
            type="text"
            placeholder="Male/Female"
            value={formik.values.gender}
            onChange={formik.handleChange}
            className="form-input"
          />
          
        </div>
        <p className="error-message">{formik.errors.gender}</p>
        <div className="form-group">
          <label htmlFor="role" className="form-label">
            Role:
          </label>

          <input
            id="role"
            name="role"
            type="text"
            placeholder="Student/Teacher/Admin"
            value={formik.values.role}
            onChange={formik.handleChange}
            className="form-input"
          />
          
        </div>
        <p className="error-message">{formik.errors.role}</p>
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
        <div className="form-group">
          <label htmlFor="confirm_password" className="form-label">
            Confirm Password:
          </label>
          <input
            id="confirm_password"
            name="confirm_password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
            className="form-input"
          />
          
        </div>
        <p className="error-message">{formik.errors.confirm_password}</p>
        {error && <p className="error-message">{error}</p>}{" "}
        <br />
        <div>
          <button
            type="submit"
            // className="submit-button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Register
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}
