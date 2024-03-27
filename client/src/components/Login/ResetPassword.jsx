import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export const ResetPassword = () => {
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState(null);

  const formSchema = yup.object().shape({
    newPassword: yup
      .string()
      .required("New Password is required")
      .min(6, "New Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
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
    <div>
      <h2>Reset Password</h2>
      {resetSuccess && <p>Password reset successfully!</p>}
      {resetError && <p style={{ color: "red" }}>{resetError}</p>}
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
        <label htmlFor="newPassword">New Password</label>
        <br />
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
        />
        <p style={{ color: "red " }}>{formik.errors.newPassword}</p>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <p style={{ color: "red " }}>{formik.errors.confirmPassword}</p>

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};
