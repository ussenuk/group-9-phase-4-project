// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

// import Layout from "./Layout.jsx";
// import Home from "./components/Home/Home.jsx";
// import About from "./components/About/About.jsx";
// import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
// import School from "./components/kindegerten/primary.jsx";
// import Highschool from "./components/HSCHOOL/secondary.jsx";
// import DonationPage from "./components/donate/donate.jsx";
// import ScholarshipPage from "./components/scholarship/scholarship.jsx";
// import AdmissionPage from "./components/admissions/admissions.jsx";
// import News from './components/Registration/News.jsx';
// import StudentRegistration from './components/Registration/StudentRegistration.jsx';
// import Dashboard from './components/Dashboard/Dashboard.jsx';
// import Login from './components/Login/Login.jsx';
// import ResetPassword from './components/Login/ResetPassword.jsx';
// import UserRegistration from './components/Login/UserRegistration.jsx';
// import JobsList from './components/Jobs/JobsList.jsx';

// function handleLogin(users) {
//   setUsers(users);
// }

// function handleLogout() {
//   setUser(null);
// }

// const [users, setUsers] = useState([]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="inscription" element={<StudentRegistration />} />
//       <Route path="news" element={<News />} />
//       <Route path="StudentRegistration" element={<StudentRegistration />} />
//       <Route loader={githubInfoLoader} path="github" element={<Github />} />
//       <Route path="*" element={<div>Not Found</div>} />
//       <Route path="school" element={<School />} />
//       <Route path="secondary" element={<Highschool />} />
//       <Route path="donate" element={<DonationPage />} />
//       <Route path="scholarship" element={<ScholarshipPage />} />
//       <Route path="admissions" element={<AdmissionPage />} />
//       <Route path="dashboard" element={<Dashboard />} />
//       <Route path="login" element={<Login  onLogin={handleLogin}/>} />
//       <Route path="/reset-password" element={<ResetPassword />} />
//       <Route path="/user-registration" element={<UserRegistration />} />
//       <Route path="job" element={<JobsList />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import School from "./components/kindegerten/primary.jsx";
import Highschool from "./components/HSCHOOL/secondary.jsx";
import DonationPage from "./components/donate/donate.jsx";
import ScholarshipPage from "./components/scholarship/scholarship.jsx";
import AdmissionPage from "./components/admissions/admissions.jsx";
import News from "./components/Registration/News.jsx";
import StudentRegistration from "./components/Registration/StudentRegistration.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Login from "./components/Login/Login.jsx";
import ResetPassword from "./components/Login/ResetPassword.jsx";
import UserRegistration from "./components/Login/UserRegistration.jsx";
import JobsList from "./components/Jobs/JobsList.jsx";

function Main() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return (
      <>
        <h2>Welcome, {user.username}!</h2>
        <a href="http://127.0.0.1:5173/dashboard">Click here to view the Dash Board</a>
       </>
    );

    // } else {
    //   return <Login onLogin={setUser} />;
  }

  function handleLogin(user, history) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="inscription" element={<StudentRegistration />} />
        <Route path="news" element={<News />} />
        <Route path="StudentRegistration" element={<StudentRegistration />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="school" element={<School />} />
        <Route path="secondary" element={<Highschool />} />
        <Route path="donate" element={<DonationPage />} />
        <Route path="scholarship" element={<ScholarshipPage />} />
        <Route path="admissions" element={<AdmissionPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login onLogin={handleLogin} />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-registration" element={<UserRegistration />} />
        <Route path="job" element={<JobsList />} />
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
