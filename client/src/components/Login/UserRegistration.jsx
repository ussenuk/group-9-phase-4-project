// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";

// const Registration = () => {
//   // const [isRegistered, setIsRegistered] = useState(false);
//   const navigate = useNavigate();

//   function handleSubmit(e) {
//     // e.preventDefault();
//     fetch("http://127.0.0.1:5555/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: formik.values.username,
//         fullname: formik.values.fullname,
//         age: formik.values.age,
//         gender: formik.values.gender,
//         role: formik.values.role,
//         password: formik.values.password,
//         confirm_password: formik.values.confirm_password,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Invalid entries.");
//         }
//         return response.json();
//       })
//       .then((user) => {
//         // onLogin(user);
//         console.log("Successfully created a user");
//         navigate("/login");
//       })
//       .catch((error) => {
//         // Error handling
//         console.error("User creation error:", error.message);
//         // Display error message to the user
//         alert(error.message);
//       });
//   }

//   const formSchema = Yup.object({
//     username: Yup.string().required("Username is required"),
//     fullname: Yup.string().required("Full Name is required"),
//     age: Yup.string().required("Age is required"),
//     gender: Yup.string().required("Gender is required"),
//     role: Yup.string().required("Role is required"),
//     password: Yup.string()
//       .required("Password is required")
//       .min(6, "Password must be at least 6 characters"),
//     confirm_password: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

//   // const initialValues = {
//   //   username: "",
//   //   fullname: "",
//   //   age: "",
//   //   gender: "",
//   //   role: "",
//   //   password: "",
//   //   confirm_password: "",
//   // };

//   // const onSubmit = (values, { resetForm }) => {
//   //   console.log(values);
//   //   resetForm();
//   //   setIsRegistered(true);
//   // };

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       fullname: "",
//       age: "",
//       gender: "",
//       role: "",
//       password: "",
//       confirm_password: "",
//     },
//     validationSchema: formSchema,
//     onSubmit: (values) => {
//       fetch("users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values, null, 2),
//       }).then((res) => {
//         if (res.status == 200) {
//           setRefreshPage(!refreshPage);
//         }
//       });
//     },
//   });

//   // return (
//   //   <div className="bg-blue-100 py-8 px-4">
//   //     <h2 className="text-2xl font-bold mb-4 text-center">
//   //       <u>Registration Form</u>
//   //     </h2>
//   //     <Formik
//   //       // initialValues={initialValues}
//   //       validationSchema={validationSchema}
//   //       onSubmit={onSubmit}
//   //     >
//   //       {() => (
//   //         <Form className="max-w-md mx-auto">
//   //           <div className="mb-4">
//   //             <label
//   //               htmlFor="username"
//   //               className="block text-sm font-medium text-gray-700"
//   //             >
//   //               Username
//   //             </label>
//   //             <Field
//   //               type="text"
//   //               id="username"
//   //               name="username"
//   //               className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//   //             />
//   //             <ErrorMessage
//   //               name="username"
//   //               component="div"
//   //               className="text-red-500 text-sm mt-1"
//   //             />
//   //           </div>
//   //           <div className="mb-4">
//   //             <label
//   //               htmlFor="fullname"
//   //               className="block text-sm font-medium text-gray-700"
//   //             >
//   //               Full Name
//   //             </label>
//   //             <Field
//   //               type="text"
//   //               id="fullname"
//   //               name="fullname"
//   //               className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//   //             />
//   //             <ErrorMessage
//   //               name="fullname"
//   //               component="div"
//   //               className="text-red-500 text-sm mt-1"
//   //             />
//   //           </div>
//   //           <div className="mb-4">
//   //             <label
//   //               htmlFor="age"
//   //               className="block text-sm font-medium text-gray-700"
//   //             >
//   //               Age
//   //             </label>
//   //             <Field
//   //               type="text"
//   //               id="age"
//   //               name="age"
//   //               className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//   //             />
//   //             <ErrorMessage
//   //               name="age"
//   //               component="div"
//   //               className="text-red-500 text-sm mt-1"
//   //             />
//   //           </div>
//   //           <div className="mb-4">
//   //             <label
//   //               htmlFor="gender"
//   //               className="block text-sm font-medium text-gray-700"
//   //             >
//   //               Gender
//   //             </label>
//   //             <Field
//   //               type="text"
//   //               id="gender"
//   //               name="gender"
//   //               className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//   //             />
//   //             <ErrorMessage
//   //               name="gender"
//   //               component="div"
//   //               className="text-red-500 text-sm mt-1"
//   //             />
//   //           </div>
//   //           <div className="mb-4">
//   //             <label
//   //               htmlFor="role"
//   //               className="block text-sm font-medium text-gray-700"
//   //             >
//   //               Role
//   //             </label>

//   //             <Field
//   //               type="text"
//   //               id="role"
//   //               name="role"
//   //               placeholder="Student/Teacher/Admin"
//   //               className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//   //             />
//   //             <ErrorMessage
//   //               name="role"
//   //               component="div"
//   //               className="text-red-500 text-sm mt-1"
//   //             />
//   //           </div>
//   //           <div className="mb-4">
//   //             <label
//   //               htmlFor="password"
//   //               className="block text-sm font-medium text-gray-700"
//   //             >
//   //               Password
//   //             </label>
//   //             <Field
//   //               type="password"
//   //               id="password"
//   //               name="password"
//   //               className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//   //             />
//   //             <ErrorMessage
//   //               name="password"
//   //               component="div"
//   //               className="text-red-500 text-sm mt-1"
//   //             />
//   //           </div>
//   //           <div className="mb-4">
//   //             <label
//   //               htmlFor="confirmPassword"
//   //               className="block text-sm font-medium text-gray-700"
//   //             >
//   //               Confirm Password
//   //             </label>
//   //             <Field
//   //               type="password"
//   //               id="confirmPassword"
//   //               name="confirmPassword"
//   //               className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//   //             />
//   //             <ErrorMessage
//   //               name="confirmPassword"
//   //               component="div"
//   //               className="text-red-500 text-sm mt-1"
//   //             />
//   //           </div>
//   //           <button
//   //             type="submit"
//   //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out w-full"
//   //           >
//   //             Register
//   //           </button>
//   //         </Form>
//   //       )}
//   //     </Formik>

//   //     {/* {/* {isRegistered && (
//   //       <div className="fixed inset-0 flex items-center justify-center z-50">
//   //         <div className="bg-white p-4 rounded-md shadow-md">
//   //           <p className="text-lg text-gray-800">
//   //             Account created successfully!
//   //           </p>
//   //           <button
//   //             onClick={() => setIsRegistered(false)}
//   //             className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
//   //           >
//   //             Close
//   //           </button>
//   //         </div>
//   //       </div>
//   //     )} */}
//   //   </div>
//   // );

//   return (
//     <div className="bg-blue-100 py-8 px-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">
//         <u>Registration Form</u>
//       </h2>

//       <Form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Username
//           </label>
//           <Field
//             type="text"
//             id="username"
//             name="username"
//             className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//           />
//           <ErrorMessage
//             name="username"
//             component="div"
//             className="text-red-500 text-sm mt-1"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="fullname"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Full Name
//           </label>
//           <Field
//             type="text"
//             id="fullname"
//             name="fullname"
//             className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//           />
//           <ErrorMessage
//             name="fullname"
//             component="div"
//             className="text-red-500 text-sm mt-1"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="age"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Age
//           </label>
//           <Field
//             type="text"
//             id="age"
//             name="age"
//             className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//           />
//           <ErrorMessage
//             name="age"
//             component="div"
//             className="text-red-500 text-sm mt-1"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="gender"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Gender
//           </label>
//           <Field
//             type="text"
//             id="gender"
//             name="gender"
//             className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//           />
//           <ErrorMessage
//             name="gender"
//             component="div"
//             className="text-red-500 text-sm mt-1"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="role"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Role
//           </label>

//           <Field
//             type="text"
//             id="role"
//             name="role"
//             placeholder="Student/Teacher/Admin"
//             className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//           />
//           <ErrorMessage
//             name="role"
//             component="div"
//             className="text-red-500 text-sm mt-1"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <Field
//             type="password"
//             id="password"
//             name="password"
//             className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//           />
//           <ErrorMessage
//             name="password"
//             component="div"
//             className="text-red-500 text-sm mt-1"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="confirmPassword"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Confirm Password
//           </label>
//           <Field
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
//           />
//           <ErrorMessage
//             name="confirmPassword"
//             component="div"
//             className="text-red-500 text-sm mt-1"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out w-full"
//         >
//           Register
//         </button>
//       </Form>
//     </div>
//   );
// };

// export default Registration;

// =================================================================

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Registration({ onLogin, user }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
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
        if (!response.ok) {
          throw new Error("Invalid entries.");
        }
        return response.json();
      })
      .then((user) => {
        // onLogin(user);
        console.log("Successfully created a user");
        navigate("/login");
      })
      .catch((error) => {
        // Error handling
        console.error("Login error:", error.message);
        // Display error message to the user
        alert(error.message);
      });
  }

  const formSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
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
    <div className="login-form-container">
      <h2>
        <strong>
          <u>New User Registration Form</u>
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
          <p className="error-message">{formik.errors.username}</p>
        </div>

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
          <p className="error-message">{formik.errors.fullname}</p>
        </div>

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
          <p className="error-message">{formik.errors.age}</p>
        </div>

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
          <p className="error-message">{formik.errors.gender}</p>
        </div>

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
          <p className="error-message">{formik.errors.role}</p>
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
          <p className="error-message">{formik.errors.confirm_password}</p>
        </div>

        <div >
          <button type="submit" 
          
          // className="submit-button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out w-full"
          >
            Register
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}
