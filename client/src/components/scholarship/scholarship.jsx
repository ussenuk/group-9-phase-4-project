import React from 'react';
import './scholarship.css'; 

function ScholarshipPage() {
  return (
    <div className="container">
      <header className="header">
        <img className='scholarship-img' src="https://www.filepicker.io/api/file/cyS02sRrmQxhuWn5PyMg" alt="Complexe Scolaire Kims" />
        <h1>Scholarships at Complexe Scolaire Kims</h1>
        <h2>Investing in Education, Empowering Futures</h2>
      </header>
      <div className="content">
        <section className="intro">
          <h2>Welcome to Our Scholarship Program</h2>
          <p>At Complexe Scolaire Kims, we believe in providing opportunities for talented and motivated students to pursue their education without financial barriers. Our scholarship program aims to support outstanding students who demonstrate academic excellence, leadership potential, and a commitment to making a positive impact in their community.</p>
        </section>
        <section className="eligibility">
          <h2>Scholarship Eligibility Criteria</h2>
          <ul>
            <li>Must be a current student of Complexe Scolaire Kims</li>
            <li>Must demonstrate academic excellence</li>
            <li>Must exhibit leadership qualities</li>
            <li>Must actively participate in extracurricular activities</li>
            <li>Financial need may be considered</li>
          </ul>
        </section>
        <section className="application">
          <h2>How to Apply</h2>
          <p>Interested students should submit a scholarship application form along with the following documents:</p>
          <ul>
            <li>Completed application form</li>
            <li>Transcripts of academic records</li>
            <li>Letter(s) of recommendation</li>
            <li>Personal statement outlining academic and career goals</li>
            <li>Proof of financial need (if applicable)</li>
          </ul>
          <p>The scholarship application deadline is [Insert Deadline Date]. Late applications will not be considered.</p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions regarding the scholarship program or the application process, please feel free to contact us:</p>
          <p>Email: scholarships@complexescolairekims.com</p>
          <p>Phone: +1234567890</p>
        </section>
      </div>
     
    </div>
  );
}

export default ScholarshipPage;
