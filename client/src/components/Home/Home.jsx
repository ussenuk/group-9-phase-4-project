import React, { useEffect, useContext } from 'react'; // import useContext
import { Routes, Route, Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Dashboard from '../Dashboard/Dashboard';
import SignUp from '../Login/SignUp';
import Login from '../Login/Login';
import Grid from '../Home/Grid';
import Image1 from '../Images/1.jpg';
import Image2 from '../Images/4.jpeg';
import Image3 from '../Images/3.jpg';
import Image4 from '../Images/Kims.png';
import { UserContext } from '../../UserContext';

export default function Home() {


  const { user, setUser } = useContext(UserContext); // use UserContext

  useEffect(() => {
    // auto-login
    fetch("http://127.0.0.1:5555/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  let slides = [
    {image: Image1, content:"Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma."},
    {image: Image4, content:"Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma."},
    {image: Image2, content:"Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma."},
    {image:Image3, content:"Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma."},
    
  ];

  return (
    <div className="w-[60%] m-auto pt-11">
      <Routes>
        {/* Always render these routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* Conditional rendering based on user */}
        {user !== null && user.id ? (
          // If user data is available, render Dashboard
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        ) : null}
        {/* Always render Carousel and Grid on "/" route */}
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
      </Routes>
    </div>
  );
}