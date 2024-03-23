import React from 'react';
import Carousel from '../Carousel/Carousel';
import Grid from '../Home/Grid';
import Image1 from '../Images/1.jpg'
import Image2 from '../Images/4.jpeg'
import Image3 from '../Images/3.jpg'
import Image4 from '../Images/Kims.png'

export default function Home() {
    let slides = [
        {image: Image1, content:"Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma."},
        {image: Image4, content:"Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma."},
        {image: Image2, content:"Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma."},
        {image:Image3, content:"Le Complexe Scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation Primaire, Secondaire et Professionnel en République Démocratique du Congo constituée présentement de deux sections, notamment maternelle et primaire.Cette école est localisée dans la cité de Sake, à quelques kilomètres de la ville de Goma."},
        
      ];
    
      return (
        <div className="w-[60%] m-auto pt-11">
          <Carousel slides={slides} />
          <div className="w-[100%] m-auto pt-11 py-8">
          <Grid />
          </div>
          

        </div>
      );
}