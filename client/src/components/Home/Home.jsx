import React from 'react';
import Carousel from '../Carousel/Carousel';
import Grid from '../Home/Grid';
import Card from '../Home/Card';
import Testimonials from './Testimonials';
import Image1 from '../Images/1.jpg'
import Image2 from '../Images/4.jpeg'
import Image3 from '../Images/3.jpg'
import Image4 from '../Images/Kims.png'

export default function Home() {
    let slides = [
        {image: Image1, content:"KIM'S School Complex, created in 2018, is a school approved by the Ministry of Primary, Secondary and Vocational Education in the Democratic Republic of the Congo and currently comprises two sections, namely nursery and primary. The school is located in the town of Sake, a few kilometers from the city of Goma."},
        {image: Image4, content:"Building the sanctuary, in which all the magic happens. We are on the verge of making the seemingly impossible, a possible reality."},
        {image: Image2, content:"One child, one teacher, one book, one pen, can change the world"},
        {image:Image3, content:"What started off as an idea, dream, only 3 years ago, has translated into a school premise filled with over 300 children."},
        
      ];
    
      return (
        <div className="w-[60%] m-auto pt-2">
          <Carousel slides={slides} />
          <Card/>
          <div className="w-[100%] m-auto pt-0 py-0">
          <Grid />
          <Testimonials/>
          </div>
          
        </div>
      );
}