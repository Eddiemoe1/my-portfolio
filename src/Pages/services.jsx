import './Home.css';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="home-container">
      

      <div className="home-content">
        <h1>My Services</h1>
        <p className="subtitle">What I can do for you</p>
        <p className="intro">
          I offer a wide range of development services including:
        </p>
        <ul>
          <li>Responsive Website Design</li>
          <li>Frontend Development (React, HTML, CSS, JS)</li>
          <li>Backend Development (Node.js, Express, MongoDB)</li>
          <li>UI/UX Design and Prototyping</li>
          <li>Performance Optimization</li>
        </ul>
      </div>

      <div className="home-image">
        <img src="Screenshot 2025-06-19 225706.png" alt="services" />
      </div>
    </div>
  );
}

export default Services;
