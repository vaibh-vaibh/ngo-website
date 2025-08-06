import React from 'react';
import VolunteerForm from '../components/VolunteerForm';

function Volunteer() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Volunteer With Us</h1>
      <p className="text-center mb-5">
        Join us in making a difference! Fill out the form below to become a part of our volunteer team.
      </p>
      
      <VolunteerForm />
    </div>
  );
}

export default Volunteer;