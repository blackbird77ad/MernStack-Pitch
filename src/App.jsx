import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Employers from './pages/Employers';
import Talents from './pages/Talents';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/talents" element={<Talents />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
