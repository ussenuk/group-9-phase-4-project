// News.jsx

import React from 'react';

const schoolNews = [
  {
    id: 1,
    title: "New Science Wing Opening Ceremony",
    content: "We are excited to announce the grand opening ceremony for our new state-of-the-art Science Wing! Join us on March 20th at 10:00 AM for the ribbon-cutting ceremony and a tour of the new facilities.",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Upcoming Parent-Teacher Conference",
    content: "Our annual Parent-Teacher Conference will be held on March 25th from 3:00 PM to 6:00 PM. This is an opportunity for parents to meet with teachers, discuss their child's progress, and address any concerns.",
    date: "2024-03-14"
  },
  {
    id: 3,
    title: "Student Council Election Results",
    content: "Congratulations to the newly elected members of the Student Council! We would like to thank all the candidates for their participation and encourage everyone to support the new council members as they work to improve our school community.",
    date: "2024-03-13"
  }
];

const News = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">School News</h2>
      <ul>
        {schoolNews.map(newsItem => (
          <li key={newsItem.id} className="mb-8 border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{newsItem.title}</h3>
            <p className="text-gray-700 mb-2">{newsItem.content}</p>
            <p className="text-gray-500">Date: {newsItem.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;