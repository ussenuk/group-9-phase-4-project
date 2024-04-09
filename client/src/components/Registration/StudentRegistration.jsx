import React, {useState} from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const StudentRegistration = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const formSchema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    father_fname: yup.string().required("Father's First Name is required"),
    father_lname: yup.string().required("Father's Last Name is required"),
    mother_fname: yup.string().required("Mother's First Name is required"),
    mother_lname: yup.string().required("Mother's Last Name is required"),
    adress: yup.string().required("Address is required"),
    grade: yup.string().required("Grade is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      father_fname: "",
      father_lname: "",
      mother_fname: "",
      mother_lname: "",
      adress: "",
      grade: "grade1", // Default to grade1
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("http://127.0.0.1:5555/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to register student.");
          }
        })
        .then((data) => {
          // Handle success, set success message
          setSuccessMessage("Student registered successfully!");
          // Reset form values after successful registration
          formik.resetForm();
          // Clear success message after a few seconds
          setTimeout(() => {
            setSuccessMessage(null);
          }, 3000);
        })
        .catch((error) => {
          // Handle error
          console.error("Error registering student:", error);
        });
    },
  });

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Online Student Registration</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <p className="error-message">{formik.errors.first_name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <p className="error-message">{formik.errors.last_name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="father_fname" className="block text-sm font-medium text-gray-700">
            Father's First Name
          </label>
          <input
            type="text"
            id="father_fname"
            name="father_fname"
            value={formik.values.father_fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
          {formik.touched.father_fname && formik.errors.father_fname ? (
            <p className="error-message">{formik.errors.father_fname}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="father_lname" className="block text-sm font-medium text-gray-700">
            Father's Last Name
          </label>
          <input
            type="text"
            id="father_lname"
            name="father_lname"
            value={formik.values.father_lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
          {formik.touched.father_lname && formik.errors.father_lname ? (
            <p className="error-message">{formik.errors.father_lname}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="mother_fname" className="block text-sm font-medium text-gray-700">
            Mother's First Name
          </label>
          <input
            type="text"
            id="mother_fname"
            name="mother_fname"
            value={formik.values.mother_fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
          {formik.touched.mother_fname && formik.errors.mother_fname ? (
            <p className="error-message">{formik.errors.mother_fname}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="mother_lname" className="block text-sm font-medium text-gray-700">
            Mother's Last Name
          </label>
          <input
            type="text"
            id="mother_lname"
            name="mother_lname"
            value={formik.values.mother_lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
          {formik.touched.mother_lname && formik.errors.mother_lname ? (
            <p className="error-message">{formik.errors.mother_lname}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="adress" className="block text-sm font-medium text-gray-700">
            Adress
          </label>
          <input
            type="text"
            id="adress"
            name="adress"
            value={formik.values.adress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
          {formik.touched.adress && formik.errors.adress ? (
            <p className="error-message">{formik.errors.adress}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
            Grade
          </label>
          <select
            id="grade"
            name="grade"
            value={formik.values.grade}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          >
            <option value="grade1">Grade 1</option>
            <option value="grade2">Grade 2</option>
            <option value="grade3">Grade 3</option>
            <option value="grade4">Grade 4</option>
            <option value="grade5">Grade 5</option>
            <option value="grade6">Grade 6</option>
          </select>
          {formik.touched.grade && formik.errors.grade ? (
            <p className="error-message">{formik.errors.grade}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;