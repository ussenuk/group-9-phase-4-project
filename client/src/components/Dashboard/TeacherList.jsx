import React from 'react'
import './teacherlist.css';
import Image1  from "./teacher.png";

const teachers = [
    {
        image: Image1,
        name:"TM. Juilius Mwangi",
        cost: '150',
    },
    {
        image: Image1,
        name:"TM. Juilius Mwangi",
        cost: '150',
    },
    {
        image: Image1,
        name:"TM. Juilius Mwangi",
        cost: '150',
    },
    {
        image: Image1,
        name:"TM. Juilius Mwangi",
        cost: '150',
    },
]

const TeacherList = () => {
  return (
    <div className='teacher--list'>
        <div className='list--header'>
            <h2>Teachers</h2>
            {/*<select>
                <option value="english">English</option>
                <option value="french">French</option>
  </select>*/}
        </div>

        <div className='list--container'>
        {teachers.map((teacher) =>(
            <div className='list'>
                <div className='teacher--detail'>
                <img src={teacher.image} alt={teacher.name} />
                <h2>{teacher.name}</h2>
                </div>
                <span>${teacher.cost}/month</span>
                <span className='teacher--todo'>:</span>
            </div>
        ))}
        
        </div>
    </div>
  )
}

export default TeacherList
