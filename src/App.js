import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import OnlineServices from './Components/OnlineServices.js';
import CommandConfirm from './Components/CommandConfirm';
import ClientSpace from './Components/ClientSpace';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<OnlineServices />} />
          <Route path="clientSpace" element={<ClientSpace />} />
          <Route path="commandeConfime" element={<CommandConfirm/>}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
