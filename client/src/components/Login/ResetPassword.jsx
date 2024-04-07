import { useFormik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

export default function ResetPassword() {
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState(null);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    newPassword: yup
      .string()
      .required("New Password is required")
      .min(6, "New Password must be at least 6 characters"),
    confirmNewPassword: yup
      .string()
      .required("Confirm New Password is required")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("http://127.0.0.1:5555/reset_password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.ok) {
            setResetSuccess(true);
            setResetError(null);
            navigate("/login"); // Redirect to login page after successful reset
          } else {
            setResetSuccess(false);
            setResetError("Failed to reset password.");
          }
        })
        .catch((error) => {
          setResetSuccess(false);
          setResetError("An error occurred while resetting password.");
        });
    },
  });

  return (
    <div className="login-form-container">
      <h2>
        <strong>
          <u>Reset Password</u>
        </strong>
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="form-input"
          />
          
        </div>
        {formik.touched.username && formik.errors.username ? (
          <div className="error-message">{formik.errors.username}</div>
        ) : null}

        <div className="form-group">
          <label htmlFor="newPassword" className="form-label">
            New Password:
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            className="form-input"
          />
        </div>
        {formik.touched.newPassword && formik.errors.newPassword ? (
          <div className="error-message">{formik.errors.newPassword}</div>
        ) : null}
        <div className="form-group">
          <label htmlFor="confirmNewPassword" className="form-label">
            Confirm New Password:
          </label>
          <input
            id="confirmNewPassword"
            name="confirmNewPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmNewPassword}
            className="form-input"
          />
          
        </div>
        {formik.touched.confirmNewPassword &&
          formik.errors.confirmNewPassword ? (
            <div className="error-message">
              {formik.errors.confirmNewPassword}
            </div>
          ) : null}

        {resetError && <div>{resetError}</div>}
        {resetSuccess && <div>Password reset successfully!</div>}

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
