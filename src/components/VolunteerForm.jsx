import React, { useState } from 'react';

function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer Form Submitted:', formData);

    alert("Thank you for volunteering!");
    setFormData({ name: '', email: '', phone: '', skills: '', message: '' });
  };

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4 text-center">Become a Volunteer</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Skills / Expertise</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Teaching, Fundraising"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Why do you want to volunteer?</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Tell us something..."
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default VolunteerForm;