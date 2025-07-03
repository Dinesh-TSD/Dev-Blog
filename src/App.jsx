import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;