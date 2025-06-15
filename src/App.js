import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./components/routes/Home.jsx";
import About from "./components/routes/About.jsx";
import Service from "./components/routes/Service.jsx";
import Contact from "./components/routes/Contact.jsx";
import SignUp from './components/routes/SignUp.jsx';

import './App.css';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
