import React,{ useState } from "react";

const StudentRegistration = () => {
  const [student, setStudent] = useState([]);
  const [first_name, setfname] = useState("");
  const [last_name, setlname] = useState("");
  const [father_lname, setflname] = useState("");
  const [father_fname, setffname] = useState("");
  const [mother_fname, setmfname] = useState("");
  const [mother_lname, setmlname] = useState("");
  const [adress, setAdress] = useState("");
  const [grade, setGrade] = useState("");

  
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:5555/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        father_fname,
        father_lname,
        mother_fname,
        mother_lname,
        adress,
        grade
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((student) => {
          setStudent(student);
          setRegisterSuccess(true);
        });
      }
    });
  }

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Online Student Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="Father's firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Father's First Name
          </label>
          <input
            type="text"
            id="FatherfirstName"
            name="FatherfirstName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="Father's lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Father's Last Name
          </label>
          <input
            type="text"
            id="FatherlastName"
            name="FatherlastName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="Mother's firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Mother's First Name
          </label>
          <input
            type="text"
            id="MotherfirstName"
            name="MotherfirstName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="Mother's lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Mother's Last Name
          </label>
          <input
            type="text"
            id="MotherlastName"
            name="MotherlastName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="Adress"
            className="block text-sm font-medium text-gray-700"
          >
            Adress
          </label>
          <input
            type="text"
            id="adress"
            name="adress"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="grade"
            className="block text-sm font-medium text-gray-700"
          >
            Grade
          </label>
          <select
            id="grade"
            name="grade"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          >
            <option value="grade1">Grade 1</option>
            <option value="grade2">Grade 2</option>
            <option value="grade3">Grade 3</option>
            <option value="grade4">Grade 4</option>
            <option value="grade5">Grade 5</option>
            <option value="grade6">Grade 6</option>
          </select>
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
