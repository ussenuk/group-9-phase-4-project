import React from "react";
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
import News from './components/Registration/News.jsx';
import StudentRegistration from './components/Registration/StudentRegistration.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Login from './components/Login/Login.jsx';
import ResetPassword from './components/Login/ResetPassword.jsx';
import UserRegistration from './components/Login/UserRegistration.jsx';
import JobsList from './components/Jobs/JobsList.jsx';


function handleLogin(user) {
  setUser(user);
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
      <Route path="login" element={<Login  onLogin={handleLogin}/>} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/user-registration" element={<UserRegistration />} />
      <Route path="job" element={<JobsList />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
