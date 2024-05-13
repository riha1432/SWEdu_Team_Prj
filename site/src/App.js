import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Product from './pages/product/Product';
import ProductDetailPage from './pages/product/ProductDetailPage';
import IntroductionPage from './pages/introduction/IntroductionPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // 로그인 상태를 저장하는 state 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 상태를 변경하는 함수
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // 로그아웃 상태를 변경하는 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Router>
        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/introduction' element={<IntroductionPage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/Detail/:id' element={<ProductDetailPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
