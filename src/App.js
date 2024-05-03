import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './navbar';
import Contato from './contato';
import Footer from './footer';
import Home from './home';
import  Quemsomos from './Quemsomos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Quemsomos' element={<Quemsomos/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;