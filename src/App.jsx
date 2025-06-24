import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/services';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faqs">FAQs</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </div>
  );
}

export default App;
