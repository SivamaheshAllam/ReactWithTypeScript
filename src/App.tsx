import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import Registration from './Container/Components/Registration';

import Login from './Container/Components/Login';
import Home from './Container/Components/Home';
import ProductsListing from './Container/Components/ProductsListing';
import ProductDetails from './Container/Components/ProductDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     {/* <Link to='/'></Link> */}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/home" element={<Home></Home>} />
        <Route path="/products" element={<ProductsListing/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route>404 Not found!</Route>
      </Routes> 
    </BrowserRouter>
    </div>
  );
}
export default App;
