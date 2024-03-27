import React from "react";
import "./primary.css";
import { useEffect, useRef } from 'react';

const School = () => {
    const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        if (imgRef.current) {
            const scrollPosition = window.pageYOffset;
            const maxScrollPosition = window.innerHeight - imgRef.current.offsetHeight;
            const scrollPercentage = scrollPosition / maxScrollPosition;
            const scaleFactor = 1 - (scrollPercentage * 0.8);
            imgRef.current.style.transform = `scale(${scaleFactor})`;
          }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="school-container">
      <img
        src="	https://www.essence.com/wp-content/uploads/2015/12/images/2015/12/10/classroom.jpg"
        alt="school"
        className="school-img"
        ref={imgRef}
      />
      <div className="title">
        <h1>KINDERGARTEN & PRIMARY</h1>
      </div>
      <div className="content">
        <p>
          We encourage students to give their best in their studies and personal
          development. Our programs strive to awaken in students a desire to
          learn throughout their lives by demonstrating enthusiasm and empathy
          but also so that as they grow up, they are able to make ethical and to
          join with others to celebrate the bonds that unite humans, but also to
          prepare them to apply the knowledge and skills acquired in real,
          complex and unpredictable situations.
        </p>
      </div>
      <h2 className="our">Our programs:</h2>
      <ul className="programs-list">
        <li>
          are learner-centered. By placing students at the center, they
          encourage healthy relationships, ethical responsibility and personal
          challenges
        </li>
        <li>
          develop effective approaches to teaching and learning. They help
          students develop the attitudes and skills necessary for their academic
          success and personal development;
        </li>
        <li>
          are embedded in global contexts. They enable students to improve their
          understanding of languages and cultures, and to examine ideas and
          issues of global importance;
        </li>
      </ul>
      <div className="finally">
        <span>
          Through the programs, students explore demanding and important
          content. KIS learners strive to become investigators, thinkers and
          communicators, as well as informed and educated individuals, of
          integrity, open-minded, selfless, daring, balanced and thoughtful.
        </span>
        These qualities represent a broad range of human abilities and
        responsibilities that go beyond intellectual development and academic
        achievement. For each level KIS provides a classroom that meets the
        educational requirements of our programs. The teaching materials and
        activities are adapted to each year of learning. Nursery school students
        have a separate playground from primary school students. They make
        library visits and are exposed to 1 hour of local language per week. The
        annual school program is communicated to parents at the start of the
        year.
      </div>
      
       
    </div>
  );
};

export default School;
