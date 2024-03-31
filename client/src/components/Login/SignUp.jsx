import React, { useState, useContext } from "react";
import './login.css';
import { UserContext } from '../../UserContext';

function SignUp() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [role, setRole] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:5555/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        fullname,
        age,
        gender,
        bio,
        image_url: imageUrl,
        role
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          setSignupSuccess(true);
        });
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {signupSuccess && <div style={{ color: 'green' }}>Signup successful!</div>}
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
        <select
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <label htmlFor="image_url">Image URL</label>
        <input
          type="text"
          id="image_url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label htmlFor="role">Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out mt-4" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;