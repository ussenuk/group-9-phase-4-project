import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Registration = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const initialValues = {
    username: "",
    fullname: "",
    age: "",
    gender: "",
    role: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    fullname: Yup.string().required("Full Name is required"),
    age: Yup.string().required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    setIsRegistered(true);
  };

  return (
    <div className="bg-blue-100 py-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        <u>Registration Form</u>
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <Field
                type="text"
                id="fullname"
                name="fullname"
                className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
              />
              <ErrorMessage
                name="fullname"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <Field
                type="text"
                id="age"
                name="age"
                className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <Field
                type="text"
                id="gender"
                name="gender"
                className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
              />
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>

              <select
                id="grade"
                name="grade"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
              >
                <option value=""></option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out w-full"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>

      {isRegistered && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg text-gray-800">
              Account created successfully!
            </p>
            <button
              onClick={() => setIsRegistered(false)}
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
