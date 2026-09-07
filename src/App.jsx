import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'

import Jumbotron from './components/Jumbotron';
import TestP5 from './components/TestP5';

import jumbotronImage from './assets/stars.jpg';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Jumbotron
       image={jumbotronImage}
      />

      <TestP5 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
