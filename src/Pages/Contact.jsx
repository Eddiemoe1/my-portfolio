import './Home.css';

function Contact() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Contact Me</h1>
        <p className="subtitle">Let’s build something awesome together</p>
        <p className="intro">
          Whether you're looking to hire, collaborate, or just want to say hi, feel free to reach out! <br />
          I'm always open to discussing new projects, ideas, or opportunities. 
          You can contact me through the following channels:
        
        </p>

        <ul className="contact-list">
          
          <strong>Phone:</strong> <a href="tel:+254790650233">254790650233 </a><br />
          <strong>GitHub:</strong> <a href="https://github.com/Eddiemoe1" target="_blank" rel="noopener noreferrer">github.com/Eddiemoe1</a><br />
          <strong>Email:</strong> <a href="mailto:your.moraaednah601@gmail.com">moraaednah601@gmail.com</a><br />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ednah-moraa-11744927a" target="_blank" rel="noopener noreferrer">linkedin.com/in/www.linkedin.com/in/ednah-moraa-11744927a</a>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
