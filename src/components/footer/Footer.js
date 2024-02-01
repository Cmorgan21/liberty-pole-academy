import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="content-container">
          <div className="information-container">
            <div>
              <p><i class="fa-solid fa-location-dot"></i> Liberty Pole Dance Academy Unit 2</p>
              <p>The Willows Centre Halesfield 22 Telford</p>
              <p>TF7 4QX</p>
            </div>
            <iframe
              title="Liberty Location  Map"
              width="100%"
              height="200"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.716455244956!2d-2.427708587951534!3d52.64703557197832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48707fe7330c8525%3A0xb05b395a8a1ee84e!2sLiberty%20Pole%20Dance%20Academy%20Unit%202!5e0!3m2!1sen!2suk!4v1706781684889!5m2!1sen!2suk"
            ></iframe>
          </div>

          <div className="copyright-container">
            <p>Liberty Pole Dance Academy 2023<i class="fa-regular fa-copyright"></i></p>
            {/* Add content for the second column */}
          </div>

          <div className="social-container">
          <p>Follow Us!</p>
          <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/yourinstagrampage" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          {/* Add content for the third column */}
        </div>
        </div>
    </footer>
  );
};

export default Footer;

