import './Home.css';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>My Services</h1>
       
        <ul className="service-list">
          <li>
            <strong>🔐 Smart Contract Development</strong><br />
            Custom Ethereum smart contracts built with Solidity, deployed and tested using Hardhat, Truffle, and MetaMask. Secure, gas-efficient, and audit-ready code for tokens, NFTs, DeFi protocols, and more.
          </li>

          <li>
            <strong>🧠 Web3 & dApp Development</strong><br />
            Full decentralized application (dApp) development integrating smart contracts with modern web frontends (React, Next.js) and wallets. I build user-friendly, trustless experiences on the blockchain.
          </li>

          <li>
            <strong>⚙️ Backend API Development</strong><br />
            Robust backend systems built with Node.js, C#, or .NET, integrated with MySQL, SQLite, or Firebase. I create clean RESTful APIs and real-time services optimized for performance.
          </li>

          <li>
            <strong>🖥️ Full-Stack Web Development</strong><br />
            End-to-end web applications from databases to front-end interfaces. I build fast, scalable web apps using nextjs, React, Flutter, HTML5, and JavaScript, following best practices in design and development.
          </li>

          <li>
            <strong>🎨 UI/UX Design & Prototyping</strong><br />
            Clean, modern interfaces with a focus on user experience. I use tools like Figma, Canva, and Dreamweaver to design and prototype responsive UIs across web and mobile platforms.
          </li>

          <li>
            <strong>🚀 Deployment & DevOps</strong><br />
            Setup and deploy apps on platforms like Azure, Docker, and GitHub Pages. I handle version control, environment configs, and CI/CD workflows to keep your project stable and up to date.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
