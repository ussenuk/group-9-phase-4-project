import React from 'react'
import { BiUser, BiChild, BiSolidUniversalAccess } from 'react-icons/bi'

const levels = [
    {
        title:'Kindergarden',
        icon:<BiSolidUniversalAccess></BiSolidUniversalAccess>,
    },
    {
        title:'Primary',
        icon:< BiChild/>,
    },
    {
        title:'Secondary',
        icon:<BiUser/>,
    },
];

const Card = () => {
  return (
    <div className='card--container'>
        {levels.map((item) =>(
            <div className='card'>
            <div className='card--cover'>{item.icon}</div>
            <div className='card--title'>
                <h2>{item.title}</h2>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Card
