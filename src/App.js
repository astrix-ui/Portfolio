import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Academic from './academics/Academic';
import './App.css';
import HeroSection from './hero section/HeroSection';
import Navbar from './Navbar/Navbar';
import Skills from './skills/Skills';
import Home from './pages/home';
import Projects from './pages/projects';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/Contactme';
import ThankYou from './thankyou';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Projects" element={ <Projects /> } />
        <Route path="/AboutMe" element={ <AboutMe /> } />
        <Route path="/ContactMe" element={ <ContactMe /> } />
        <Route path="/thankyou" element= {<ThankYou />} />

      </Routes>
    </Router>
  );
}

export default App;
