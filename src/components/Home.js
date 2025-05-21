
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="section home">
      <div className="home-content">
        <div className="intro-text">
          <h2>Hello, it's Me</h2>
          <h1>Sri Ramya Krishna</h1>
          <p>And I'm a Full Stack Developer</p>
          <a href="/Sri_Ramya_Krishna_Final_Resume.pdf" className="btn" download>Download Resume</a>
        </div>
        <div className="intro-image">
          <img src="/profile.png" alt="Sri Ramya Krishna" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
