// 수정된 클라이언트 측 코드 (login.js)

import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css'; // 스타일 파일 불러오기



function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:10004/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('로그인에 실패했습니다.');
      }

      console.log('로그인 성공');
      // 로그인 성공 시 처리할 작업 추가
    } catch (error) {
      console.error('로그인 실패:', error.message);
      // 로그인 실패 시 처리할 작업 추가
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2>로그인</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">이메일:</label>
              <input type="text" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">비밀번호:</label>
              <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <button type="submit" className="btn btn-dark">로그인</button>
          </form>
          <p className="mt-3">계정이 없으신가요? <Link to="/Signup">회원가입</Link>하세요.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
