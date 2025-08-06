import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Volunteer from './pages/Volunteer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App