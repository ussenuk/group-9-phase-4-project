import { useEffect, useRef } from "react";
import React from "react";
import './secondary.css';


const Highschool = () => {
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
        <h1>SECONDARY</h1>
      </div>

      <h2>The Program</h2>
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
    </div>
  );
};

export default Highschool;
