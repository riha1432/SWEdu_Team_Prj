import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate 추가
import { useRecoilState } from 'recoil';
import { searchState } from '../recoilState.js';

const NavBar = () => {
  const isLoggedIn = localStorage.getItem('token') !== null;
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLogout = () => {
    localStorage.removeItem('token'); // 토큰 제거
    // 로그아웃 후 추가적인 작업 수행 (예: 리디렉션 등)
  };

  const [text, setText] = useState('');
  const onChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const [search, setSearch] = useRecoilState(searchState);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (text === "케일") {
        navigate('/product/detail/1') // useNavigate를 사용하여 리디렉션
      }
      else if(text === "상추") {
          navigate('/product/detail/2') 
      }
      else if(text === "근대"){
        navigate('/product/detail/3') 
      }else if(text === "겨자채"){
        navigate('/product/detail/4') 
      }
      else if(text === "상품목록" || text === "상품" || text === "목록"){
        navigate('/product') 
      }
      else if(text === "배송" || text === "배송중"){
        navigate('/tracking') 
      }
    }
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
            <li className="nav-item">
              <Link className="nav-link" to="/product">상품 목록</Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">마이페이지</a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/member">회원 정보</Link>
                  <Link className="dropdown-item" to="/tracking">배송 조회</Link>
                  <Link className="dropdown-item" to="/">수량 변경</Link>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/" onClick={handleLogout}>로그아웃</a>
                </div>
              </li>
            )}
          </ul>

          <form className="d-flex">
            <input className="form-control me-sm-6" style={{width: '300px'}} type="search" placeholder="Search" value={text} onChange={onChange} onKeyDown={handleKeyDown}  />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
