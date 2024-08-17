import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/index';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Menu from './components/Menu';
// import About from './components/About';
// import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;