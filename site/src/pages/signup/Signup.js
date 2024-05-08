import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Signup.css'; // CSS 파일 import

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userType, setUserType] = useState('일반 사용자'); // 기본값은 '일반 사용자'

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('회원가입 정보:', { username, email, password, address, userType });
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
          <div className="mb-3">
            <label htmlFor="address" className="form-label">주소:</label>
            <input type="text" className="form-control" id="address" value={address} onChange={handleAddressChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">전화번호:</label>
            <input type="text" className="form-control" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="userType" className="form-label">사용자 유형:</label>
            <select className="form-select" id="userType" value={userType} onChange={handleUserTypeChange}>
              <option value="일반 사용자">일반 사용자</option>
              <option value="관리자">관리자</option>
            </select>
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
