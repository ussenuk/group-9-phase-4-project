import React, { useState,  useEffect, useRef } from 'react';
import './donate.css'; 

function DonationPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', { fullName, email, amount, paymentMethod, comments });
  };
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
    <div className="container">
      <header className="header">
        <img className= 'donate-img' src="https://www.filepicker.io/api/file/n9DHnntQXCyO4Ln5l3jQ" alt="Complexe Scolaire Kims" ref = {imgRef} />
        <h1>Support Complexe Scolaire Kims</h1>
        <h2>Every Donation Makes a Difference</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <h2>Make a Donation</h2>
        <div className="form-control">
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className="form-control">
          <label>Email Address:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-control">
          <label>Donation Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="form-control">
          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
            <option value="">Select payment method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <div className="form-control">
          <label>Additional Comments:</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn-donate">Donate Now</button>
      </form>
      <div className="why-donate">
        <h2>Why Donate to Complexe Scolaire Kims?</h2>
        <p>Support the education and development of our students. Your donation helps provide resources, facilities, and opportunities for our students to thrive.</p>
      </div>
      <div className="ways-to-give">
        <h2>Other Ways to Give</h2>
        <ul>
          <li>Monthly Giving</li>
          <li>Legacy Giving</li>
          <li>In-Kind Donations</li>
          <li>Volunteer Opportunities</li>
        </ul>
      </div>
      <div className="donor-recognition">
        <h2>Thank You for Your Support</h2>
        <p>Every donation is greatly appreciated. We extend our heartfelt gratitude to all our generous donors.</p>
      </div>
      
    </div>
  );
}

export default DonationPage;
