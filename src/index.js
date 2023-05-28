import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from './pages/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import NoPages from './pages/NoPages';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NoPages />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);