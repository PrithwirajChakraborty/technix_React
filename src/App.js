import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import NavbarPage from './Components/NavbarC';
import Footer from './Components/Footer';
import Connect from './Components/Connect';
import About from './Components/About';
import Digital from './Components/Digital';
import Business from './Components/Business';

function App() {
  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/about" element={<About />} />
        <Route path="/digitalmarketing" element={<Digital />} />
        <Route path="/businessdevelopment" element={<Business />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
