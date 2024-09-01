import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../portfolio-website/src/components/Header';
import Home from '../../portfolio-website/src/components/Home';
import Footer from '../../portfolio-website/src/components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;