import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
    

      <div className="home-content">
        <h1>
          Hello, I'm <span className="highlight">Ednah Moraa</span>
        </h1>
        <p className="subtitle">Blockchain,frontend developer,Backend Developer and UI/UX Enthusiast | Smart Contract Engineer | Web3 Enthusiast 
Bridging decentralized tech and solid backend systems to build the future.

</p>
        <p className="intro">
          I build clean, modern, and responsive websites, applications and systems that make a difference.
          With a passion for design and user experience, <br />
          I transform ideas into digital reality.
        </p>
        <p>
          From building smart contracts and dApps to designing sleek user interfaces and performant APIs, I create modern, responsive, and intuitive applications that don’t just work, they stand out
        </p>
        <br />
        <br />
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>

      <div className="home-image">
        <img src="Screenshot 2025-06-19 225706.png" alt="profile" />
      </div>
    </div>
  );
}

export default Home;
