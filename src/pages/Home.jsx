import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/banner.jpg'; 

function Home() {
  return (
    <div>
      <div className="container-fluid p-0">
        <img
          src={bannerImage}
          alt="NGO Banner"
          className="img-fluid w-100"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
      </div>

      <div className="container text-center my-5">
        <h1 className="mb-4">Welcome to MyNGO</h1>
        <p className="lead">
          We are a non-profit organization committed to making a positive impact in society. 
          Join hands with us to bring change — one step at a time.
        </p>
        <Link to="/volunteer" className="btn btn-primary mt-3 px-4 py-2">
          Volunteer Now
        </Link>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              At MyNGO, our mission is to empower underprivileged communities through education,
              healthcare, and livelihood programs. We believe in inclusive growth and sustainable
              development.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="src/assets/charity-help-mission.jpg"
              alt="Mission"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;