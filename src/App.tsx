import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/index';
import Home from './pages/home'
// import Footer from './components/Footer';

// import Menu from './components/Menu';
// import About from './components/About';
// import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
        </Routes>
      </main>
     
    </div>
  );
};

export default App;