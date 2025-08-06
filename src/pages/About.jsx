import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="src\assets\people_community.jpg"
            alt="Who we are"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <br />
          <h3>Who We Are</h3>
          <p>
            MyNGO is a non-profit organization dedicated to uplifting communities through education,
            healthcare, and skill development. We aim to create sustainable change by empowering
            individuals and building strong support systems.
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src="src\assets\mission_hope.jpg"
            alt="Our mission"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <br />
          <h3>Our Mission</h3>
          <p>
            To support underprivileged individuals by providing access to basic necessities,
            opportunities for growth, and a platform to thrive. We strive to bring smiles and
            dignity to every life we touch.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h3>Our Core Values</h3>
        <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4 mt-3">
          <li className="badge bg-primary p-3 fs-6">Compassion</li>
          <li className="badge bg-success p-3 fs-6">Integrity</li>
          <li className="badge bg-info text-dark p-3 fs-6">Equality</li>
          <li className="badge bg-warning text-dark p-3 fs-6">Empowerment</li>
          <li className="badge bg-danger p-3 fs-6">Transparency</li>
        </ul>
      </div>
    </div>
  );
}

export default About;