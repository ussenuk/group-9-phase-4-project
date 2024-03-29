import { useFormik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import "./ResetPassword.css";

export default function ResetPassword() {
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState(null);

  const formSchema = yup.object().shape({
    newPassword: yup
      .string()
      .required("New Password is required")
      .min(6, "New Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm New Password is required")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/reset-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setResetSuccess(true);
          setResetError(null);
        } else {
          const errorData = await response.json();
          setResetError(errorData.message);
        }
      } catch (error) {
        setResetError("An error occurred while resetting password.");
      }
    },
  });

  return (
    <div className="login-form-container">
      <h2>Reset Password</h2>
      {resetSuccess && <p>Password reset successfully!</p>}
      {resetError && <p style={{ color: "red" }}>{resetError}</p>}
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
        <div className="form-group">
          <label htmlFor="newPassword" className="form-label">New Password:</label>
          
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            className="form-input"
          />
          <p className="error-message">{formik.errors.newPassword}</p>
          </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm New Password:</label>
         
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            className="form-input"
          />
          <p className="error-message">{formik.errors.confirmPassword}</p>
        </div>
          <button type="submit" className="reset-password-button">Reset Password</button>
      </form>
    </div>
  );
}
