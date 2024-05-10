import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  const handleLogout = () => {
    localStorage.removeItem('token'); // 토큰 제거
    // 로그아웃 후 추가적인 작업 수행 (예: 리디렉션 등)
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Ai농가집성마켓</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">로그인</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">회원가입</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/introduction">회사 소개</Link>
            </li>
          </ul>
          {isLoggedIn && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">마이페이지</a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/">회원 정보</Link>
                  <Link className="dropdown-item" to="/">배송 조회</Link>
                  <Link className="dropdown-item" to="/">수량 변경</Link>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/" onClick={handleLogout}>로그아웃</a>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;