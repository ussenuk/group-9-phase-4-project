import React, { useState } from "react";
import "./admissions.css";

function AdmissionPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Admissions</h1>
        </div>
      </header>

      <div className="container">
        <section className="admission-info">
          <h2>Join Our School Community</h2>
          <p>
            We are excited that you are considering Complexe Scolaire Kims for
            your child's education. Our admissions process is designed to help
            you learn about our school and to ensure that it's the right fit for
            your family.
          </p>
          <p>
            Please fill out the form below to request more information or
            schedule a tour of our campus. We look forward to welcoming you!
          </p>
        </section>

        <section className="admission-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AdmissionPage;
