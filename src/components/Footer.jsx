import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} MyNGO. All rights reserved.</p>
        <div>
          <a
            href="https://www.facebook.com/"
            className="text-light me-3 text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-light me-3 text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="mailto:contact@myngo.org"
            className="text-light text-decoration-none"
          >
            Email Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;