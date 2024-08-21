import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trending from './components/Trending';
import HappeningNow from './components/HappeningNow';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Trending />
      <HappeningNow />
      <Footer />
    </div>
  );
}

export default App;
