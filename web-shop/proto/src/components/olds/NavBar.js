import React from 'react';
import { Link } from 'react-router-dom';  // 리액트 라우터를 사용할 경우

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">리프밸리(였던 것)</Link>
    </div>
    <ul className="navbar-menu">
      <li><Link to="#/login">로그인</Link></li>
      <li><Link to="#/membership">회원가입</Link></li>
      <li><Link to="#/about">업무 소개</Link></li>  
      <li><Link to="#/admin">관리자(관리자로 로그인)</Link></li>
      <li><Link to="#/customerServiceCenter">고객센터</Link></li>
      <li><Link to="#/contact">찾아오시는 길</Link></li>
    </ul>
  </nav>
);

export default NavBar;

