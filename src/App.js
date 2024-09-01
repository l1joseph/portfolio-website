import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  </Router>
);

export default App;