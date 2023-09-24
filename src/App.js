import React, { useState } from 'react';
import './index.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="logo">Logo</div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;




// import './App.css';
// import Header from './components/Header'
// import Footer from './components/Footer'

// function App() {
//   return (
//     <>
//     <Header />
//     <main>
//     <h1>hello world</h1>
//     </main>
//     <Footer />
//     </>
//   );
// }

// export default App;
