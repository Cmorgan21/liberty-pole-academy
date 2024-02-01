import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

// Define your component
const HomePage = () => {
  const carouselImages = [
    '/assets/images/Liberty-Sal.jpeg',
    '/assets/images/pole-shot.png',
    '/assets/images/Liberty-group.jpeg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

    return (
      <div>
        <div className="home-container">
          <div className="text-overlay">
            <h1>Welcome to Liberty Pole Dance Academy</h1>
            <h2>Pole and Ariel Fitness</h2>
          </div>
          <a className="button-overlay"href="#book-now">Book Now</a>
        </div>
        <div className="introduction-container">
          <h2>Looking to try Pole and Ariel?</h2>
          <div className="introduction-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit gravida. Eget duis at tellus at urna. Nec ullamcorper sit amet risus nullam eget felis. Et ultrices neque ornare aenean euismod. Aliquam ultrices sagittis orci a scelerisque purus semper. Non consectetur a erat nam at lectus urna duis. Nunc sed velit dignissim sodales ut eu. In iaculis nunc sed augue lacus viverra. Nulla pharetra diam sit amet nisl suscipit adipiscing. Pretium fusce id velit ut tortor pretium viverra.
          </p>
          </div>
          <div className='home-classes-times-container'>
            <div className='class-image-container'>
                <Slider {...settings}>
                  {carouselImages.map((image, index) => (
                    <img key={index} src={image} alt={`Carousel Image ${index + 1}`} />
                  ))}
              </Slider>
            </div>
            <div className='class-button-text-container'>
              <h2>Check our classes and times</h2>
              <a href="#book-now" className="button-passes">Timetable</a>
              <a href="#book-now" className="button-passes">Classes</a>
            </div>
          </div>
        </div>
        <div className="prices-container">
          <h2>Prices</h2>
          <div className='box-containers'>
            <div className="price-box">
              <h3>PAYG</h3>
              <p>£12.50</p>
              <p>/Per Class</p>
            </div>
            <div className="price-box-popular">
              <div className="popular-price-content">
                <p><strong>- Most Popular -</strong></p>
                <h3>Monthly Pass(s)</h3>
              </div>
              <div className="popular-price-detail">
                <h6>As low as</h6>
                <p><strong>£8 /Per Class</strong></p>
              </div>
              <a href="#book-now" className="button-passes">Passes</a>

            </div>
            <div className="price-box">
              <h3>1-2-1 Privates</h3>
              <p>£23-£35</p>
              <p>/Per Class</p>
            </div>
          </div>
        </div>
        <div className="benefits-container">
            <div className="benefits-overlay">
                <h2>Why Choose Liberty?</h2>
                <ul className="benefits-list">
                    <li>Join a positive and uplifting pole community</li>
                    <li>Structured Classes</li>
                    <li>Xpert Trained Instructors</li>
                    <li>Your own Pole</li>
                    <li>Other benefits ++</li>
                </ul>
            </div>
        </div>
      </div>
    );
  };

export default HomePage;