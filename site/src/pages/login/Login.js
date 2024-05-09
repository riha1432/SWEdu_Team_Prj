/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css'; // 스타일 파일 불러오기

//components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

function Login() {
  const [email, setemail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 정보:', { email, password });
  };

  return (
    <div>
      <NavBar/>
      <div className="login-container"> {/* 중앙 정렬을 위한 컨테이너 */}
        <div className="login-box"> {/* 로그인 폼 */}
          <h2>로그인</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">이메일:</label>
              <input type="text" className="form-control" id="email" value={email} onChange={handleUsernameChange} required />
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
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
            
      
      <Footer />
    </div>
  );
}

{/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">마이페이지</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="/">회원 정보</a>
                      <a className="dropdown-item" href="/">배송 조회</a>
                      <a className="dropdown-item" href="/">수량 변경</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/">로그아웃</a>
                    </div>
                  </li> */}

export default Login;
