import React from 'react';
import Carousel from '../Carousel/Carousel';
import Image1 from '../18.png'

export default function Home() {
    let slides = [
        "/home/ussen/moringa/phase-2/projects/kims-project/src/components/18.png",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];
    
      return (
        <div className="w-[60%] m-auto pt-11">
          <Carousel slides={slides} />
        </div>
      );
}