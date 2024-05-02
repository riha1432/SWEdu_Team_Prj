import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Signup.css'; // CSS 파일 import

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('회원가입 정보:', { username, email, password });
    // 여기에 회원가입 처리 로직을 추가할 수 있습니다.
  };

  return (
    <div>
    <NavBar />
    <div className="signup-container">
      <div className="signup-box"> 
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">사용자 이름:</label>
            <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">이메일:</label>
            <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">비밀번호:</label>
            <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit" className="btn btn-dark">가입하기</button>
        </form>
        <p className="mt-3">이미 계정이 있으신가요? <Link to="/login">로그인</Link>하세요.</p>
      </div>
      
    </div>
    <Footer />
    </div>
  );
}

export default Signup;
