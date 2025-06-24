import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="profile-icon">
        <img src="Screenshot 2025-06-19 225706.png" alt="profile" />
      </div>
      
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Ednah Moraa</span></h1>
        <p className="subtitle">
          Blockchain, Frontend Developer, Backend Developer and UI/UX Enthusiast
        </p>
        <p className="intro">
          I build clean, modern, and responsive websites, applications, and systems that make a difference.
        </p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </div>
    </div>
  );
}

export default Home;