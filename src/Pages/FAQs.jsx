import './Home.css';
import { Link } from 'react-router-dom';

function FAQs() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>FAQs</h1>
        <p className="subtitle">Frequently Asked Questions</p>

        <h3>Do you work on freelance projects?</h3>
        <p>Yes! I’m open to freelance opportunities, especially ones that are creative and challenging.</p>

        <h3>What technologies do you use?</h3>
        <p>I primarily work with React, JavaScript, Node.js, and modern CSS tools. I’m always learning new stacks.</p>

        <h3>How can I reach you?</h3>
        <p>The best way is via email or through the contact page on this website.</p>
      </div>
    </div>
  );
}

export default FAQs;
