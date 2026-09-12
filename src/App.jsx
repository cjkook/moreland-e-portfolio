import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MerillDesign from './pages/MerillDesign';
import Courses from './pages/Courses';
import coursesData from './data/courses.json';

import './App.css'

import Jumbotron from './components/Jumbotron';
import TestP5 from './components/TestP5';

import jumbotronImage from './assets/stars.jpg';

function App() {
  const [isNavOpen, setNavIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/merill-design">Merrill's Design</Link> */}
        <div className="dropdown">
          <button
            type="button"
            className="dropdown-button"
            onClick={() => setNavIsOpen(!isNavOpen)}
            aria-expanded={isNavOpen}
          >
            Courses
          </button>

          {isNavOpen && (
            <div className="dropdown-menu">
              <Link to="/ed501">ED 501</Link>
              <Link to="/ed502">ED 502</Link>
              <Link to="/ed503">ED 503</Link>
              <Link to="/ed504">ED 504</Link>
              <Link to="/ed505">ED 505</Link>
              <Link to="/ed506">ED 506</Link>
              <Link to="/ed507">ED 507</Link>
              <Link to="/ed508">ED 508</Link>
            </div>
          )}
        </div>
      </nav>

      <Jumbotron
       image={jumbotronImage}
      />

      {/* <TestP5 /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/ed501" element={<Courses course={coursesData.courses[0]} />} />
        <Route path="/ed502" element={<Courses course={coursesData.courses[1]} />} />
        <Route path="/ed503" element={<Courses course={coursesData.courses[2]} />} />
        <Route path="/ed504" element={<Courses course={coursesData.courses[3]} />} />
        <Route path="/ed505" element={<Courses course={coursesData.courses[4]} />} />
        <Route path="/ed506" element={<Courses course={coursesData.courses[5]} />} />
        <Route path="/ed507" element={<Courses course={coursesData.courses[6]} />} />
        <Route path="/ed508" element={<Courses course={coursesData.courses[7]} />} />

        <Route path="/merill-design" element={<MerillDesign />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
