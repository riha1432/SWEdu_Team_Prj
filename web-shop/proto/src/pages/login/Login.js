import React from 'react';
import { Link } from 'react-router-dom';

//components
import NavBar from '../../components/NavBar';

import Footer from '../../components/Footer';




function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 정보:', { username, password });
  };

  return (
    <div>
      <NavBar/>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">사용자 이름 또는 이메일:</label>
          <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">비밀번호:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit" className="btn btn-dark">로그인</button>
      </form>
      <p className="mt-3">계정이 없으신가요? <Link to="/Signupp">회원가입</Link>하세요.</p>
    </div>
  );
}

export default Login;