import React from 'react';
import Image1 from '../Images/a.jpg'
import Image2 from '../Images/b.jpg'
import Image3 from '../Images/c.jpg'
import Image4 from '../Images/e.jpg'
import Image5 from '../Images/f.jpg'

export default function Grid() {
    
    
      return (
        <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
            <div>
                <img src={Image5} alt="" loading="lazy"/>
            </div>
            <div class="col-start-3">
                <img src={Image2} alt="" loading="lazy"/>
            </div>
            <div>
                <img src={Image3} alt="" loading="lazy"/>
            </div>
            <div>
                <img src={Image4} alt="" loading="lazy"/>
            </div>
            <div class="row-start-1 col-start-2 col-span-2">
                <img src={Image1} alt="" loading="lazy"/>
            </div>
        </div>
      );
}