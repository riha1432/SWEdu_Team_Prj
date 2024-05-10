import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/Signup.css';


function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate(); // useHistory -> useNavigate 변경

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('회원가입 정보:', { username, email, password, address, phoneNumber });

    try {
      const response = await axios.post('http://localhost:10004/signup', {
        username,
        email,
        password,
        address,
        phoneNumber
      });
      console.log('회원가입 성공:', response.data);
      setSignupSuccess(true);
      alert('회원가입이 완료되었습니다!');
      window.location.href = '/Login' //<- 얼럿창에 확인버튼 누르면 로그인창으로가기
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
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
            <button type="submit" className="btn btn-dark">가입하기</button>
          </form>
          <p className="mt-3">이미 계정이 있으신가요? <Link to="/login">로그인</Link>하세요.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
