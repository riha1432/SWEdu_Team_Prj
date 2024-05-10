/*eslint-disable*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Product from './pages/product/Product';
import IntroductionPage from './pages/introduction/IntroductionPage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
  <div>
    <NavBar />
    <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/introduction' element={<IntroductionPage />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </Router>
      <Footer />
  </div>
      
  );
}

export default App;
