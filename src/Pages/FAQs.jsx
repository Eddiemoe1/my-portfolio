import './Home.css';
import { Link } from 'react-router-dom';

function FAQs() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>FAQs</h1>
        <h3>🛠️ What technologies do you specialize in?</h3>
        <p>
          I specialize in full-stack development with React, Node.js, C#, and .NET, along with smart contract development using Solidity, Ethereum, Hardhat, and Truffle.
        </p>

        <h3>🧾 Do you work on freelance or contract projects?</h3>
        <p>
          Yes I’m open to freelance and contract-based work, particularly in Web3, fintech, and full-stack web development.
        </p>

        <h3>🌐 Can you build decentralized applications (dApps)?</h3>
        <p>
          Absolutely. I build dApps that interact with Ethereum and compatible blockchains, integrating smart contracts with modern frontends using React, Next.js, and MetaMask.
        </p>

        <h3>🎨 Do you design user interfaces as well?</h3>
        <p>
          Yes, I offer UI/UX design services using tools like Figma, Canva, and Dreamweaver, and turn those into responsive web and mobile interfaces.
        </p>

        <h3>📩 How can I reach you?</h3>
        <p>
          You can <Link to="/contact">contact me here</Link> or email me directly. I usually respond within 24–48 hours.
        </p>

        <h3>🔄 Do you provide post-launch support or maintenance?</h3>
        <p>
          Yes, I offer ongoing support, performance tuning, and smart contract upgrades after launch to ensure your project stays secure and up to date.
        </p>
      </div>
    </div>
  );
}

export default FAQs;
