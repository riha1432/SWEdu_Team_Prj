import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import NavBar from './components/NavBar';

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
    <Router>
      <div>
        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
