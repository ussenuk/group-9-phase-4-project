import React from 'react'
import ContentHeader from './ContentHeader'
import "./content.css";
import Card from './Card'
import TeacherList from './TeacherList';

const Content = () => {
  return (
    <div className='content'>
      <ContentHeader/>
      <Card />
      <TeacherList/>
    </div>
  )
}

export default Content
