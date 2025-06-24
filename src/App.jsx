import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/services';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Left Sidebar Navigation */}
      <nav className="left-navbar">
        {/* Profile Icon at Top */}
        <div className="profile-icon-nav">
           <img src="Screenshot 2025-06-19 225706.png" alt="profile" />
          
        </div>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;