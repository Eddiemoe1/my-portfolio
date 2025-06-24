import './Home.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="home-container">

      <div className="home-content">
        <h1>Contact Me</h1>
        <p className="subtitle">Let’s get in touch!</p>
        <p className="intro">
          Whether you have a question, want to work together, or just want to say hi — my inbox is always open!
        </p>
        <p>Email: <a href="mailto:moraaednah601@gmail.com">moraaednah601@gmail.com</a></p>
        <p>Phone: +254790650233</p>
        <a href="mailto:moraaednah601@gmail.com" className="cta-button">Send Email</a>
      </div>
    </div>
  );
}

export default Contact;
