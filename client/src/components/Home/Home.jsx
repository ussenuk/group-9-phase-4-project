import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from '../Carousel/Carousel';
import Dashboard from '../Dashboard/Dashboard';
import SignUp from "../Login/SignUp";
import Login from "../Login/Login";
import Logout from "../Login/Logout";
import NavBar from "../Dashboard/Navbar";
import Grid from '../Home/Grid';
import Image1 from '../Images/1.jpg'
import Image2 from '../Images/4.jpeg'
import Image3 from '../Images/3.jpg'
import Image4 from '../Images/Kims.png'
import Layout from '../../Layout';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user session data on component mount
    fetch("/check_session")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Failed to fetch user session");
        }
      })
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error("Error fetching user session:", error);
      });
  }, []);

  let slides = [
    {
      image: Image1,
      content: "Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma.",
    },
    {
      image: Image4,
      content: "Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma.",
    },
    {
      image: Image2,
      content: "Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma.",
    },
    {
      image: Image3,
      content: "Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma.",
    },
  ];

  return (
    <div className="w-[60%] m-auto pt-11">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        {user ? (
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        ) : (
          <>
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route
              path="/"
              element={
                <>
                  <Carousel slides={slides} />
                  <div className="w-[100%] m-auto pt-11 py-8">
                    <Grid />
                  </div>
                </>
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}
